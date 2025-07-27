import { Container, Graphics, Ticker } from "pixi.js";
import { registerKeyboardEvent } from "../../engine/keyboard/keyboard";
import { COLOR } from "../colors/scheme";

type Direction = "Up" | "Down" | "Left" | "Right";
export class Snake extends Container {
  #speed = 0;
  #direction: Direction = "Right";
  #graphic: Graphics;
  public constructor() {
    super();
    this.#graphic = new Graphics();
    this.#graphic.rect(0, 0, 30, 30);
    this.#graphic.fill(COLOR.HEAD);
    this.addChild(this.#graphic);
    this.#speed = this.#graphic.width / 6;
    registerKeyboardEvent({
      Up: () => (this.#direction = "Up"),
      Left: () => (this.#direction = "Left"),
      Right: () => (this.#direction = "Right"),
      Down: () => (this.#direction = "Down"),
    });
  }

  public update(time: Ticker) {
    console.log("update snake", this.#direction, this.#speed);
    const movementAxis = ["Left", "Right"].includes(this.#direction)
      ? "x"
      : "y";

    const operator = ["Left", "Up"].includes(this.#direction) ? -1 : 1;
    this.#graphic[movementAxis] += this.#speed * time.deltaTime * operator;
  }
}
