// Adds functionality to a class dynamically
// Allows us to use combinations of decorators
var BasicCoffee = /** @class */ (function () {
    function BasicCoffee() {
    }
    BasicCoffee.prototype.getCost = function () {
        return 5;
    };
    BasicCoffee.prototype.getDescription = function () {
        return "This is Basic Coffee";
    };
    return BasicCoffee;
}());
var MilkDecorator = /** @class */ (function () {
    function MilkDecorator(coffee) {
        this.coffee = coffee;
    }
    MilkDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 2;
    };
    MilkDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Milk";
    };
    return MilkDecorator;
}());
var SugarDecorator = /** @class */ (function () {
    function SugarDecorator(coffee) {
        this.coffee = coffee;
    }
    SugarDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 5;
    };
    SugarDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Sugar";
    };
    return SugarDecorator;
}());
var WhippedCreamDecorator = /** @class */ (function () {
    function WhippedCreamDecorator(coffee) {
        this.coffee = coffee;
    }
    WhippedCreamDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 5;
    };
    WhippedCreamDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Whipped Coffee";
    };
    return WhippedCreamDecorator;
}());
var coffee = new BasicCoffee();
console.log("Baisc Coffee Cost is ".concat(coffee.getCost(), " ").concat(coffee.getDescription()));
var fancyCoffee = new SugarDecorator(new MilkDecorator(new WhippedCreamDecorator(new BasicCoffee())));
console.log("Fancy Coffee");
console.log("Cost", fancyCoffee.getCost());
console.log(fancyCoffee.getDescription());
