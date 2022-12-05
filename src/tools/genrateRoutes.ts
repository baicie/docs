import fs, { existsSync, readFileSync } from "fs";
import { globbySync } from "globby";
import matter from "gray-matter";
// import genrateRoute from "./genrateRoute";
import path from "path";

// 遍历外层文件夹读取index.md文件生成父级目录
async function genrateRoutes() {
  const baseSrc = "src/md";
  // 获取所有层级 限定二级
  const paths = globbySync(`**/*`, {
    deep: 1,
    cwd: baseSrc,
    onlyDirectories: true,
  });

  const dirs: Record<string, {}> = {};

  // 读取文件夹信息
  paths.forEach((pat) => {
    const dirIndexPath = `${baseSrc}/${pat}/index.md`;
    if (existsSync(dirIndexPath)) {
      const content = readFileSync(dirIndexPath).toString();
      const { data } = matter(content);

      dirs[data.path ? data.path : pat] = {
        ...dirs[data.patindexh ? data.path : pat],
        ...data,
      };

      {
        const dir_path = `${baseSrc}/${pat}/`;
        // 获取所有层级 限定二级
        const paths = globbySync(`**/*.md`, {
          deep: 2,
          cwd: dir_path,
        });
        const components: Record<string, { path: string } & object> = {};

        paths.forEach((pat2) => {
          const content = fs.readFileSync(`${dir_path}/${pat2}`).toString();
          const componentName = path.basename(pat2, path.extname(pat2));

          const { data } = matter(content);

          components[componentName] = { ...components[componentName], ...data };
        });

        const TEMPLATE = `
            export default [
      ${Object.keys(components).map((component) => {
        return `
          {
            path: '${
              "path" in components[component]
                ? components[component]["path"]
                : encodeURIComponent(component)
            }:lang(-cn)?',
            meta: ${JSON.stringify(components[component])},
            component: () => import('../../${dir_path}/${component}.md'),
          }`;
      })}
    ];`;

        fs.writeFileSync(`src/router/${pat}Routes.ts`, TEMPLATE);
      }
    }
  });
  // 生成文件
  const TEMPLATE = `
  import Layout from "../layouts/index.vue";
  ${Object.keys(dirs)
    .map((dir) => {
      const dir_path =
        "path" in dirs[dir] ? dirs[dir]["path"] : encodeURIComponent(dir);
      return `import ${dir_path}Routes from "./${dir_path}Routes";`;
    })
    .toString()
    .replace(",", "")}

  export default [
    ${Object.keys(dirs).map((dir) => {
      const dir_path =
        "path" in dirs[dir] ? dirs[dir]["path"] : encodeURIComponent(dir);

      return `
          {
            path: '${dir_path}',
            meta: ${JSON.stringify(dirs[dir])},
            component: Layout,
            children: [...${dir_path}Routes],
          }
        `;
    })}
  ]
  `;

  console.log(TEMPLATE);

  // 格式化
  // const engine = new ESLint({
  //   fix: true,
  //   useEslintrc: false,
  //   baseConfig: {},
  //   // baseConfig: path.resolve(process.cwd(), ".eslintrc.js"),
  // });

  // const report = await engine.lintText(TEMPLATE);
  // if (!report[0].output) return;
  // fs.writeFileSync("src/router/demoRoutes.js", report[0].output);
  // console.log(TEMPLATE);
  // 写入
  fs.writeFileSync("src/router/rootRoutes.ts", TEMPLATE);
}
genrateRoutes();
