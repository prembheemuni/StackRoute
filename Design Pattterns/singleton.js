var DataConfiguration = /** @class */ (function () {
    function DataConfiguration() {
        this.config = {
            apiKey: "asbashhjsksl",
        };
    }
    DataConfiguration.getInstance = function () {
        if (!DataConfiguration.instance) {
            DataConfiguration.instance = new DataConfiguration();
        }
        return DataConfiguration.instance;
    };
    DataConfiguration.prototype.getConfig = function () {
        return this.config;
    };
    return DataConfiguration;
}());
var configurationManager = DataConfiguration.getInstance();
console.log(configurationManager.getConfig());
var configurationManager2 = DataConfiguration.getInstance();
console.log(configurationManager === configurationManager2);
