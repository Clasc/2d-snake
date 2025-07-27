import { Container, Graphics } from "pixi.js";
import { registerKeyboardEvent } from "../../engine/keyboard/keyboard";

export function Snake(parent: Container) {
  const graphics = new Graphics();
  graphics.rect(0, 0, 30, 30);
  graphics.fill(0xd3249);
  parent.addChild(graphics);
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
