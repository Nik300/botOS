interface Context {
  [key: string]: any;
}
type Middleware = (ctx: Context, next: () => void) => void;
type BotEvent = string;

interface App {
  use(middleware: Middleware[]): App;
  on(event: BotEvent, ...middlewares: Middleware[]): App;
  trigger(event: BotEvent, ctx: Context): App;
  register(...bots: any[]): App;
}
declare const app: App;
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
declare const config: BotConfig;
interface CLIOptions {
  readonly Verbose: boolean;
  readonly Time: boolean;
  readonly ConfigPath: string;
  readonly MainModule?: string;
}
declare const options: CLIOptions;
declare function plugin(name: string): any;
declare function require(path: string): any;
declare let exports: any;
