var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.displayConfiguration = function () {
        console.log("Computer Configuration");
        console.log("::CPU::", this.cpu);
        console.log("::GPU::", this.gpu);
        console.log("::RAM::", this.ram);
        console.log("::STORAGE::", this.storage);
        console.log("::hasSSD::", this.hasSSD);
    };
    return Computer;
}());
var ComputerBuilder = /** @class */ (function () {
    function ComputerBuilder() {
        this.computer = new Computer();
    }
    ComputerBuilder.prototype.setCPU = function (cpu) {
        this.computer.cpu = cpu;
        return this;
    };
    ComputerBuilder.prototype.setGPU = function (gpu) {
        this.computer.gpu = gpu;
        return this;
    };
    ComputerBuilder.prototype.setRAM = function (ram) {
        this.computer.ram = ram;
        return this;
    };
    ComputerBuilder.prototype.setStorage = function (storage) {
        this.computer.storage = storage;
        return this;
    };
    ComputerBuilder.prototype.setHasSSD = function (hasSSD) {
        this.computer.hasSSD = hasSSD;
        return this;
    };
    ComputerBuilder.prototype.build = function () {
        return this.computer;
    };
    return ComputerBuilder;
}());
var gamingPC = new ComputerBuilder()
    .setCPU("Intel 19")
    .setGPU("Nvida 4000x")
    .setRAM(8)
    .setStorage(250)
    .setHasSSD(true)
    .build();
gamingPC.displayConfiguration();
