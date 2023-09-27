import { Config } from "./Config";
import { url } from "./constant";
import { $, getKeys, sleep } from "./misc";
type Callback = (newConfig: Config) => void;

export class Command {
  // #region Properties (3)

  private callback: Callback = () => {};
  private config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  private isPlaying = false;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor() {
    this.render();
    this.setActions();
  }

  // #endregion Constructors (1)

  // #region Public Methods (6)

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  async play() {
    while (this.isPlaying) {
      await sleep(1000 / 60);
      const mf = +((this.config.multiplicationFactor + 0.01) % 100).toFixed(2);
      this.setConfig({ ...this.config, multiplicationFactor: mf });
    }
  }

  render() {
    const keys: (keyof Config)[] = getKeys(this.config);

    for (const key of keys) {
      const elt = $(`div.command label.${key} .value`);
      elt.innerHTML = this.config[key] + "";
      const slider = $(`div.command label.${key} input`, HTMLInputElement);
      slider.value = this.config[key] + "";
    }
    $(`div.command div.buttons button.play`).innerHTML = this.isPlaying
      ? "Pause"
      : "Play";
  }

  public setActions() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor"];

    for (const key of keys) {
      const slider = $(`div.command label.${key} input`, HTMLInputElement);

      slider.addEventListener("input", () => {
        const newConfig: Config = { ...this.config, [key]: slider.value };
        this.setConfig(newConfig);
      });
    }

    this.setPlayBtnActions();
    this.setRandomBtnAction();
  }
  setRandomBtnAction() {
    const randomBtn = $(`div.command div.buttons button.random`);
    randomBtn.addEventListener("click", async () => {
      try {
        console.log("RANDOM CLICK");
        const response = await fetch(url);
        const config: Config = await response.json();
        this.setConfig(config);
      } catch (err) {
        console.log("err: ", err);
      }
    });
  }

  public setConfig(config: Config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }

  public setPlayBtnActions() {
    const playBtn = $(`div.command div.buttons button.play`);
    playBtn.addEventListener("click", () => {
      console.log("PLAY CLICK");
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }

  // #endregion Public Methods (6)
}
