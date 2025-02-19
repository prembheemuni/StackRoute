class DataConfiguration {
  private static instance: DataConfiguration;
  private config: Record<string, any>;
  private constructor() {
    this.config = {
      apiKey: "asbashhjsksl",
    };
  }

  static getInstance(): DataConfiguration {
    if (!DataConfiguration.instance) {
      DataConfiguration.instance = new DataConfiguration();
    }
    return DataConfiguration.instance;
  }

  getConfig(): any {
    return this.config;
  }
}

const configurationManager = DataConfiguration.getInstance();
console.log(configurationManager.getConfig());

const configurationManager2 = DataConfiguration.getInstance();

console.log(configurationManager === configurationManager2);
