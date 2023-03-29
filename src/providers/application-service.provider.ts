import { AbstractServiceProvider } from "@klavier/core";
import { ConfigConst, IConfigLoader } from "@klavier/config";
import * as process from "process";
import * as path from "path";

export class ApplicationServiceProvider extends AbstractServiceProvider {
	public register(): void {
		//
	}

	public boot(): void {
		const configLoader: IConfigLoader = this.container.get(ConfigConst.IConfigLoaderToken);

		const configFilePath = path.resolve(<string>process.env["NODE_PATH"], "");
		console.log(configLoader, configFilePath);
	}
}
