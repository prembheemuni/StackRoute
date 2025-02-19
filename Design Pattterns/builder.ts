class Computer {
  public cpu: string;
  public gpu: string;
  public ram: number;
  public storage: number;
  public hasSSD: boolean;

  public displayConfiguration(): void {
    console.log("Computer Configuration");
    console.log("::CPU::", this.cpu);
    console.log("::GPU::", this.gpu);
    console.log("::RAM::", this.ram);
    console.log("::STORAGE::", this.storage);
    console.log("::hasSSD::", this.hasSSD);
  }
}

interface IComputerBuilder {
  setCPU(cpu: string): IComputerBuilder;
  setGPU(gpu: string): IComputerBuilder;
  setRAM(ram: number): IComputerBuilder;
  setStorage(storage: number): IComputerBuilder;
  setHasSSD(hasSSD: boolean): IComputerBuilder;
  build(): Computer;
}

class ComputerBuilder implements IComputerBuilder {
  private computer: Computer;
  constructor() {
    this.computer = new Computer();
  }
  setCPU(cpu: string): IComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }
  setGPU(gpu: string): IComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }
  setRAM(ram: number): IComputerBuilder {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage: number): IComputerBuilder {
    this.computer.storage = storage;
    return this;
  }
  setHasSSD(hasSSD: boolean): IComputerBuilder {
    this.computer.hasSSD = hasSSD;
    return this;
  }
  build(): Computer {
    return this.computer;
  }
}

const gamingPC = new ComputerBuilder()
  .setCPU("Intel 19")
  .setGPU("Nvida 4000x")
  .setRAM(8)
  .setStorage(250)
  .setHasSSD(true)
  .build();

gamingPC.displayConfiguration();
