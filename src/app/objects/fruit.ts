import { Container, Graphics } from "pixi.js";
import { COLOR } from "../colors/scheme";

export function Fruit(parent: Container) {
  const graphics = new Graphics();
  graphics.circle(50, 50, 10);
  graphics.fill(COLOR.FOOD);
  parent.addChild(graphics);
}
