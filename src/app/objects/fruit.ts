import { Graphics } from "pixi.js";
import { CreationEngine } from "../../engine/engine";

export function Fruit(engine: CreationEngine) {
  const graphics = new Graphics();
  graphics.circle(40, 40, 20);
  graphics.fill(0xd3249);
  engine.stage.addChild(graphics);
}
