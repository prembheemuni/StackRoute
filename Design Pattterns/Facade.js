// Creates a simpler interface that managers with multiple complex interfaces work together
// Example for complex service Lughts, Sound, TV , streaming
// Facade is HomeTheatre where it operators with all the above complex systems
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOff = function () {
        console.log("Tv is turned off!");
    };
    TV.prototype.turnOn = function () {
        console.log("Tv is turned on!");
    };
    TV.prototype.setInput = function (input) {
        console.log("Input mode", input);
    };
    return TV;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.turnOn = function () {
        console.log("System Sound Turn on!");
    };
    SoundSystem.prototype.turnOff = function () {
        console.log("System Sound Turn off!");
    };
    SoundSystem.prototype.setVolumeLevel = function (level) {
        console.log("Sound System volume set to", level);
    };
    return SoundSystem;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function (level) {
        console.log("Lights Dimmed to", level);
    };
    Lights.prototype.turnOff = function () {
        console.log("Lights turned off");
    };
    return Lights;
}());
var StreamingService = /** @class */ (function () {
    function StreamingService() {
    }
    StreamingService.prototype.play = function (movie) {
        console.log("Movie is playing", movie);
    };
    StreamingService.prototype.stop = function () {
        console.log("movie is stopped playing");
    };
    return StreamingService;
}());
var HomeTheatre = /** @class */ (function () {
    function HomeTheatre() {
        this.tv = new TV();
        this.soundSystem = new SoundSystem();
        this.lights = new Lights();
        this.streamingService = new StreamingService();
    }
    HomeTheatre.prototype.watchMovie = function (movie) {
        this.tv.turnOn();
        this.soundSystem.turnOn();
        this.soundSystem.setVolumeLevel(5);
        this.lights.dim(10);
        this.streamingService.play(movie);
    };
    HomeTheatre.prototype.turnOffSystem = function () {
        this.tv.turnOff();
        this.soundSystem.turnOff();
        this.lights.turnOff();
        this.streamingService.stop();
    };
    return HomeTheatre;
}());
var homeTheatre = new HomeTheatre();
homeTheatre.watchMovie("Bahubali");
