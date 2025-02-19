// Creates a simpler interface that managers with multiple complex interfaces work together
// Example for complex service Lughts, Sound, TV , streaming
// Facade is HomeTheatre where it operators with all the above complex systems

class TV {
  public turnOff(): void {
    console.log("Tv is turned off!");
  }

  public turnOn(): void {
    console.log("Tv is turned on!");
  }

  public setInput(input: string): void {
    console.log("Input mode", input);
  }
}

class SoundSystem {
  public turnOn(): void {
    console.log("System Sound Turn on!");
  }

  public turnOff(): void {
    console.log("System Sound Turn off!");
  }

  public setVolumeLevel(level: number) {
    console.log("Sound System volume set to", level);
  }
}

class Lights {
  public dim(level: number): void {
    console.log("Lights Dimmed to", level);
  }

  public turnOff(): void {
    console.log("Lights turned off");
  }
}

class StreamingService {
  public play(movie: string) {
    console.log("Movie is playing", movie);
  }

  public stop() {
    console.log("movie is stopped playing");
  }
}

class HomeTheatre {
  private tv: TV;
  private soundSystem: SoundSystem;
  private lights: Lights;
  private streamingService: StreamingService;

  constructor() {
    this.tv = new TV();
    this.soundSystem = new SoundSystem();
    this.lights = new Lights();
    this.streamingService = new StreamingService();
  }

  public watchMovie(movie: string) {
    this.tv.turnOn();
    this.soundSystem.turnOn();
    this.soundSystem.setVolumeLevel(5);
    this.lights.dim(10);
    this.streamingService.play(movie);
  }

  public turnOffSystem() {
    this.tv.turnOff();
    this.soundSystem.turnOff();
    this.lights.turnOff();
    this.streamingService.stop();
  }
}

const homeTheatre = new HomeTheatre();
homeTheatre.watchMovie("Bahubali");
