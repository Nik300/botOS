declare module "botOS" {
  global {
    interface Context {
      [key: string]: any;
    }
    type Middleware<ContextType> = (ctx: Context & ContextType, next: () => void) => void;
    type BotEvent = string;

    interface App {
      use<ContextType>(middleware: Middleware<ContextType>[]): App;
      on<ContextType>(event: BotEvent, ...middlewares: Middleware<ContextType>[]): App;
      trigger<ContextType>(event: BotEvent, ctx: ContextType): App;
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

    export interface Message {
      text: string;
      id: string;
      content: any;
      delete: () => Promise<boolean>;
      edit: (text: string) => Promise<Message | undefined>;
    }
  }
}