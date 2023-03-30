import { AbstractServiceProvider } from "@klavier/core";
import { ConfigConst, type IConfigLoader } from "@klavier/config";
import { env } from "process";
import { resolve } from "path";

export class ApplicationServiceProvider extends AbstractServiceProvider {
	public register(): void {
		//
	}

	public boot(): void {
		this.configureApplicationEnvironmentFile();
	}

	private configureApplicationEnvironmentFile(): void {
		const configLoader: IConfigLoader = this.container.get(ConfigConst.IConfigLoaderToken);

		const nodePath: string = env["NODE_PATH"] as string;
		const configFilePath: string = resolve(nodePath, `env.${env["NODE_ENV"]}.yaml`);

		configLoader.loadConfig(configFilePath);
	}
}
