import { FancyButton } from "@pixi/ui";
import { animate } from "motion";
import type { Ticker } from "pixi.js";
import { Container, Text } from "pixi.js";
import { Snake } from "../../characters/snake";
import { Fruit } from "../../objects/fruit";
import { COLOR } from "../../colors/scheme";
import { registerKeyboardEvent } from "../../../engine/keyboard/keyboard";

/** The screen that holds the app */
export class MainScreen extends Container {
  /** Assets bundles required by this screen */
  public static assetBundles = ["main"];
  #pauseButton: FancyButton;
  public mainContainer: Container;
  #paused = false;
  #snake: Snake;

  constructor() {
    super();
    this.mainContainer = new Container();
    this.addChild(this.mainContainer);
    this.#snake = this.mainContainer.addChild(new Snake());
    this.mainContainer.addChild(new Fruit());
    this.#pauseButton = new FancyButton({
      text: new Text({
        text: "🛑",
        style: { fontSize: 40, fill: COLOR.FONT_MAIN },
      }),
    });
    this.addChild(this.#pauseButton);
  }

  /** Prepare the screen just before showing */
  public prepare() {
    this.#pauseButton.onPress.connect(() => this.pause());
    registerKeyboardEvent({
      Esc: () => this.pause(),
    });
  }

  /** Update the screen */

  public update(_time: Ticker) {
    if (this.#paused) return;
    this.#snake.update(_time);
  }

  public async pause() {
    this.mainContainer.interactiveChildren =
      !this.mainContainer.interactiveChildren;
    this.#paused = !this.#paused;
  }

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    this.mainContainer.x = centerX;
    this.mainContainer.y = centerY;
    this.#pauseButton.x = 30;
    this.#pauseButton.y = 30;
  }
}
