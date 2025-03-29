declare module "botOS" {
  global {
    interface Context {
      [key: string]: any;
    }
    type Middleware = (ctx: Context, next: () => void) => void;
    type BotEvent = string;

    interface App {
      use(middleware: Middleware[]): App;
      on(event: BotEvent, ...middlewares: Middleware[]): App;
      trigger(event: BotEvent, ctx: Context): App;
      register(...bots: Bot[]): App;
    }
    const app: App;
    interface BotInfo {
      readonly name: string;
      readonly version: string;
      readonly author: string;
      readonly description?: string;
      readonly license?: string;
      readonly repository?: string;
    }
    interface PlatformInfo {
      readonly access: { [key: string]: string };
      readonly options?: { [key: string]: string };
    }
    interface BotConfig {
      readonly bot: BotInfo;
      readonly platforms: { [key: string]: PlatformInfo };
      readonly options?: { [key: string]: string };
    }
    const config: BotConfig;
    interface CLIOptions {
      readonly Verbose: boolean;
      readonly Time: boolean;
      readonly ConfigPath: string;
      readonly MainModule?: string;
    }
    interface BotPlugin {
      blame: string;
      dir: () => string;
    }
    const options: CLIOptions;
    function plugin(name: string): any;
    function require(path: string): any;
    let exports: any;

    export interface Bot {
      // Bot methods/properties
      // Add required properties
    }
  }
}