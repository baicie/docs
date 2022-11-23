import { ESLint } from "eslint";
// import esConfig from '../../'
import fs from "fs";
import { globbySync } from "globby";
import matter from "gray-matter";
import path from "path";
// import require from "require";

async function genrateRoutes() {
  const baseSrc = "src/md";
  // 获取所有层级 限定二级
  const paths = globbySync(`**/*.md`, {
    deep: 2,
    cwd: baseSrc,
  });

  const dirs = globbySync(``, {
    deep: 1,
    onlyDirectories: true,
    cwd: baseSrc,
  });

  const components: Record<string, { path: string } & object> = {};

  paths.forEach((pat) => {
    const content = fs.readFileSync(`${baseSrc}/${pat}`).toString();
    const componentName = path.basename(pat, path.extname(pat));

    const { data } = matter(content);
    // if ("path" in data) {
    components[componentName] = { ...components[componentName], ...data };
    // }
  });
  const TEMPLATE = `
    export default [
      ${Object.keys(components).map((component) => {
        console.log(components[component].path);
        return `
          {
            path: '${
              "path" in components[component]
                ? components[component]["path"]
                : component
            }:lang(-cn)?',
            meta: ${JSON.stringify(components[component])},
            component: () => import('../../${baseSrc}/${component}.md'),
          }`;
      })}
    ];`;
  // 格式化
  // const engine = new ESLint({
  //   fix: true,
  //   useEslintrc: false,
  //   baseConfig: {},
  //   // baseConfig: path.resolve(process.cwd(), ".eslintrc.js"),
  // });

  // const report = await engine.lintText(TEMPLATE);
  // console.log(report[0].output);
  // if (!report[0].output) return;
  // console.log(report[0].output);
  // fs.writeFileSync("src/router/demoRoutes.js", report[0].output);
  // console.log(TEMPLATE);

  fs.writeFileSync("src/router/docsRoutes.ts", TEMPLATE);
}
genrateRoutes();
