import { Graphics } from "pixi.js";
import { setEngine } from "./app/getEngine";
import { MainScreen } from "./app/screens/main/MainScreen";
import { CreationEngine } from "./engine/engine";

/**
 * Importing these modules will automatically register there plugins with the engine.
 */
import "@pixi/sound";
import { registerKeyboardEvent } from "./engine/keyboard/keyboard";

// Create a new creation engine instance
const engine = new CreationEngine();
setEngine(engine);

(async () => {
  // Initialize the creation engine instance
  await engine.init({
    background: "#1E1E1E",
    resizeOptions: { minWidth: 768, minHeight: 1024, letterbox: false },
  });

  // Initialize the user settings
  //userSettings.init();
  //await engine.navigation.showScreen(LoadScreen);
  await engine.navigation.showScreen(MainScreen);
  Snake(engine);
})();

function Snake(engine: CreationEngine) {
  const graphics = new Graphics();
  graphics.rect(500, 500, 30, 30);
  graphics.fill(0xd3249);
  engine.stage.addChild(graphics);
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
