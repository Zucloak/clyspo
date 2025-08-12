import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Unfonts from "unplugin-fonts/vite";

const ABSOLUTE_PATH = /^\/|^[a-zA-Z]:\//;

export default [
  VinxiAutoImport({
    resolvers: [
      IconsResolver({
        prefix: "Icon",
        extension: "jsx",
        customCollections: ["cap"],
      }),
    ],
    dts: fileURLToPath(new URL("./src/auto-imports.d.ts", import.meta.url)),
  }),
  Icons({
    compiler: "solid",
    enabledCollections: ["lucide"],
    customCollections: {
      cap: FileSystemIconLoader(
        resolve(process.cwd(), "packages/ui-solid/icons")
        // (svg) => svg.replace(/^<svg /, '<svg stroke="currentColor" ')
      ),
    },
  }),
  Unfonts({
    fontsource: {
      families: [{ name: "Geist Sans", weights: [400, 500, 700] }],
    },
  }),
];

// Workaround for https://github.com/solidjs/solid-start/issues/1374
/**
 * @param {import("unplugin-auto-import/dist/types.d.ts").Options} options
 */
function VinxiAutoImport(options) {
  const autoimport = AutoImport(options);

  return {
    ...autoimport,
    transform(src, id) {
      let pathname = id;

      if (ABSOLUTE_PATH.test(id)) {
        pathname = new URL(`file://${id}`).pathname;
      }
      
      return autoimport.transform(src, pathname);
    },
  };
}
