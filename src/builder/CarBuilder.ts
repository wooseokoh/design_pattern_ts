import Car from './Car';

export default class CarBuilder {
  private engine: string = undefined;
  private airbag: boolean = false;
  private color: string = undefined;
  private cameraSencsor: boolean = false;
  private AEB: boolean = undefined;

  setEngine(v: string) {
    this.engine = v;
    return this;
  }

  setAirbag(v: boolean) {
    this.airbag = v;
    return this;
  }

  setColor(v: string) {
    this.color = v;
    return this;
  }

  setCameraSencsor(v: boolean) {
    this.cameraSencsor = v;
    return this;
  }

  setAEB(v: boolean) {
    this.AEB = v;
    return this;
  }

  build(): Car {
    if (this.engine == undefined) return null;
    if (this.color == undefined) return null;
    if (this.AEB == undefined) return null;

    return new Car(
      this.engine,
      this.airbag,
      this.color,
      this.cameraSencsor,
      this.AEB
    );
  }
}
