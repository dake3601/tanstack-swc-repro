import { defineConfig, type RsbuildConfig } from "@rsbuild/core";
import { tanstackStart } from "@tanstack/react-start/plugin/rsbuild";

function applyReactRuntime(
  config: any,
  targets: string[] | Record<string, string>,
) {
  config.jsc ??= {};
  config.jsc.transform ??= {};
  config.jsc.transform.react = { runtime: "automatic" };
  config.env = { ...(config.env ?? {}), targets };
  return config;
}

export default defineConfig(
  (): RsbuildConfig => ({
    plugins: [tanstackStart({})],

    dev: {
      hmr: true,
      liveReload: true,
    },

    environments: {
      client: {
        tools: {
          swc: (config: any) =>
            applyReactRuntime(config, [
              "chrome >= 80",
              "firefox >= 78",
              "edge >= 80",
              "safari >= 13.1",
            ]),
        },
      },

      ssr: {
        tools: {
          rspack: (config: any) => {
            config.externalsPresets = {
              ...(config.externalsPresets ?? {}),
              node: true,
            };
          },
          swc: (config: any) => applyReactRuntime(config, { node: "18" }),
        },
      },
    },
  }),
);
