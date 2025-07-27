import { CircularProgressBar } from "@pixi/ui";
import { animate } from "motion";
import type { ObjectTarget } from "motion/react";
import { Container } from "pixi.js";

/** Screen shown while loading assets */
export class LoadScreen extends Container {
  public static assetBundles = ["preload"];
  private progressBar: CircularProgressBar;

  constructor() {
    super();

    this.progressBar = new CircularProgressBar({
      backgroundColor: "#3d3d3d",
      fillColor: "",
      radius: 100,
      lineWidth: 15,
      value: 20,
      backgroundAlpha: 0.5,
      fillAlpha: 0.8,
      cap: "round",
    });

    this.progressBar.x += this.progressBar.width / 2;
    this.progressBar.y += -this.progressBar.height / 2;

    this.addChild(this.progressBar);
  }

  public onLoad(progress: number) {
    this.progressBar.progress = progress;
  }

  /** Resize the screen, fired whenever window size changes  */
  public resize(width: number, height: number) {
    this.progressBar.position.set(width * 0.5, height * 0.5);
  }

  /** Show screen with animations */
  public async show() {
    this.alpha = 1;
  }

  /** Hide screen with animations */
  public async hide() {
    await animate(this, { alpha: 0 } as ObjectTarget<this>, {
      duration: 0.3,
      ease: "linear",
      delay: 1,
    });
  }
}
