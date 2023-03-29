import { Klavier } from "@klavier/core";
import { ConfigServiceProvider } from "@klavier/config";
import { ExpressServiceProvider } from "@klavier/express-adapter";
import { ApplicationServiceProvider } from "@/providers";

class Application {
	private klavier: Klavier = Klavier.getInstance();

	public registerProviders(): Application {
		this.klavier.add(ConfigServiceProvider);
		this.klavier.add(ExpressServiceProvider);
		this.klavier.add(ApplicationServiceProvider);

		return this;
	}

	public runApplication() {
		this.klavier.run("localhost", 3000, (): void => {
			console.log("Server running on port 3000");
		});
	}
}

new Application().registerProviders().runApplication();
