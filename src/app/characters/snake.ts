import { Container, Graphics } from "pixi.js";
import { registerKeyboardEvent } from "../../engine/keyboard/keyboard";
import { COLOR } from "../colors/scheme";

export class Snake extends Container {
  public constructor() {
    super();
    const graphics = new Graphics();
    graphics.rect(0, 0, 30, 30);
    graphics.fill(COLOR.HEAD);
    this.addChild(graphics);
    const movementSpeed = graphics.width / 2;
    registerKeyboardEvent({
      Up: () => {
        graphics.y -= movementSpeed;
      },
      Left: () => {
        graphics.x -= movementSpeed;
      },
      Right: () => {
        console.log(graphics.x);
        graphics.x += movementSpeed;
      },
      Down: () => {
        graphics.y += movementSpeed;
      },
    });
  }
}
