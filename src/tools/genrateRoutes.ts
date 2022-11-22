import { globbySync } from "globby";
import fs from "fs";
import matter from "gray-matter";
import { ESLint } from "eslint";
async function genrateRoutes() {
  const paths = globbySync("src/*/*.md") as string[];
  const components: Record<string, any> = {};

  paths.forEach((path) => {
    const content = fs.readFileSync(path).toString();
    const componentName = path.split("/")[1];

    //
    const { data } = matter(content);
    components[componentName] = { ...components[componentName], ...data };
  });

  console.log(components);

  const TEMPLATE = `
    export default [
      ${Object.keys(components).map(
        (component) => `
      {
        path: '${component}:lang(-cn)?',
        meta: ${JSON.stringify(components[component])},
        component: () => import('../../../components/${component}/demo/index.vue'),
      }`
      )}
    ];`;

  //   const engine = new ESLint({
  //     fix: true,
  //     useEslintrc: false,
  //     // baseConfig: require(path.join(process.cwd(), '.eslintrc.js')),
  //   });

  //   const report = await engine.lintText(TEMPLATE);
  //   console.log(report);
  //   if (!report[0].output) return;

  //   fs.writeFileSync("src/router/demoRoutes.js", report[0].output);
  console.log(TEMPLATE);

  fs.writeFileSync("src/router/docsRoutes.ts", TEMPLATE);
}
genrateRoutes();
