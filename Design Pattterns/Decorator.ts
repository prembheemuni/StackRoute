// Adds functionality to a class dynamically
// Allows us to use combinations of decorators

interface IBasicCoffee {
  getCost(): number;
  getDescription(): string;
}

class BasicCoffee implements IBasicCoffee {
  getCost(): number {
    return 5;
  }
  getDescription(): string {
    return "Contains Basic Coffee";
  }
}

class MilkDecorator implements IBasicCoffee {
  private coffee: BasicCoffee;
  constructor(coffee: BasicCoffee) {
    this.coffee = coffee;
  }
  getCost(): number {
    return this.coffee.getCost() + 2;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator implements IBasicCoffee {
  private coffee: BasicCoffee;
  constructor(coffee: BasicCoffee) {
    this.coffee = coffee;
  }
  getCost(): number {
    return this.coffee.getCost() + 5;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ", Sugar";
  }
}

class WhippedCreamDecorator implements IBasicCoffee {
  private coffee: BasicCoffee;
  constructor(coffee: BasicCoffee) {
    this.coffee = coffee;
  }
  getCost(): number {
    return this.coffee.getCost() + 5;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ", Whipped Coffee";
  }
}

const coffee = new BasicCoffee();

console.log(
  `Baisc Coffee Cost is ${coffee.getCost()} ${coffee.getDescription()}`
);

const fancyCoffee = new SugarDecorator(new MilkDecorator(new BasicCoffee()));

console.log("Fancy Coffee");
console.log("Cost", fancyCoffee.getCost());
console.log(fancyCoffee.getDescription());

// Quick Tip :
// the problem is arried when the basic class has inputs from constructor where remaining decorators are not accepting the base class becuase of chaining

// solution is : in decorator class give type of basic class with its implemented interface and with the original class, in implemented interface only methods will be there no inputs
