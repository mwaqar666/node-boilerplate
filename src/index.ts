import { Klavier } from "@klavier/core";
import { ConfigConst, ConfigServiceProvider, type IConfigRepository } from "@klavier/config";
import { ExpressServiceProvider } from "@klavier/express-adapter";
import { ApplicationServiceProvider } from "@/providers";

class Application {
	private klavier: Klavier = Klavier.getInstance();

	public registerProviders(): Application {
		this.klavier
			// Register providers here
			.add(ConfigServiceProvider)
			.add(ExpressServiceProvider)
			.add(ApplicationServiceProvider)
			.boot();

		return this;
	}

	public runApplication(): void {
		const configRepository: IConfigRepository = this.klavier.serviceContainer().get(ConfigConst.IConfigRepositoryToken);

		const host: string = configRepository.getConfig<string, false>("run.host");
		const port: number = configRepository.getConfig<number, false>("run.port");

		this.klavier.run(host, port, (): void => {
			console.log("Server running on port 3000");
		});
	}
}

new Application().registerProviders().runApplication();
