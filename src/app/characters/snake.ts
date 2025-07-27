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
      Up: () => this.#setDirection("Up"),
      Left: () => this.#setDirection("Left"),
      Right: () => this.#setDirection("Right"),
      Down: () => this.#setDirection("Down"),
    });
  }

  #setDirection(newDirection: Direction) {
    if (
      (this.#direction === "Up" && newDirection === "Down") ||
      (this.#direction === "Down" && newDirection === "Up")
    ) {
      return;
    }
    if (
      (this.#direction === "Left" && newDirection === "Right") ||
      (this.#direction === "Right" && newDirection === "Left")
    ) {
      return;
    }
    this.#direction = newDirection;
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
