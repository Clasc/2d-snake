import { FancyButton } from "@pixi/ui";
import { animate } from "motion";
import type { Ticker } from "pixi.js";
import { Container } from "pixi.js";

import { engine } from "../../getEngine";

/** The screen that holds the app */
export class MainScreen extends Container {
  /** Assets bundles required by this screen */
  public static assetBundles = ["main"];
  private pauseButton: FancyButton;
  public mainContainer: Container;
  private paused = false;

  constructor() {
    super();
    this.mainContainer = new Container();
    this.addChild(this.mainContainer);

    this.pauseButton = new FancyButton({
      text: "Pause",
    });

    this.addChild(this.pauseButton);
  }

  /** Prepare the screen just before showing */
  public prepare() {
    this.pauseButton.onPress.connect(() => this.pause());
  }

  /** Update the screen */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(_time: Ticker) {
    if (this.paused) return;
  }

  public async pause() {
    this.mainContainer.interactiveChildren = false;
    this.paused = !this.paused;
    console.log(this.paused ? "pause" : "play");
  }

  /** Resume gameplay */
  public async resume() {
    this.mainContainer.interactiveChildren = true;
    this.paused = false;
  }

  /** Fully reset */
  public reset() {}

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    this.mainContainer.x = centerX;
    this.mainContainer.y = centerY;
    this.pauseButton.x = 30;
    this.pauseButton.y = 30;
  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

    const elementsToAnimate = [this.pauseButton];
    for (const element of elementsToAnimate) {
      element.alpha = 0;
      animate(
        element,
        { alpha: 1 },
        { duration: 0.3, delay: 0.75, ease: "backOut" },
      );
    }
  }
}
