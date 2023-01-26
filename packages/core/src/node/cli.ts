import { createCommand } from "./command/index.js";
import { createViteServer } from "./viteServer/index.js";
import { resolveAppConfig } from "./config/resolveAppConfig.js";
(async () => {
  const appConfig = await resolveAppConfig();

  createCommand((program) => {
    program.command("dev", "Starting the service").action(async () => {
      await createViteServer(appConfig);
    });

    appConfig.plugins.forEach((plugin) => {
      plugin.registerCommand({ program, appConfig });
    });
  });
})();