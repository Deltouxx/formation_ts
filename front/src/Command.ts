import { Config } from "./Config";
import { $, getKeys } from "./misc";
type Callback = (newConfig: Config) => void;

export class Command {
  // #region Properties (2)

  public callback: Callback = () => {};
  public config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor() {
    this.render();
    this.setActions();
  }

  // #endregion Constructors (1)

  // #region Public Methods (5)

  public onUpdate(callback: Callback) {
    this.callback = callback;
  }

  public render() {
    const keys: (keyof Config)[] = getKeys(this.config);

    for (const key of keys) {
      const elt = $(`div.command label.${key} .value`);
      elt.innerHTML = this.config[key] + "";
      const slider = $(`div.command label.${key} input`, HTMLInputElement);
      slider.value = this.config[key] + "";
    }
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
    });
  }

  // #endregion Public Methods (5)
}
