import { Container, Graphics } from "pixi.js";
import { COLOR } from "../colors/scheme";

export class Fruit extends Container {
  public constructor() {
    super();
    const graphics = new Graphics();
    graphics.circle(50, 50, 10);
    graphics.fill(COLOR.FOOD);
    this.addChild(graphics);
  }
}
