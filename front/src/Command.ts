import { Config } from "./Config";
import { $, getKeys } from "./misc";
type Callback = (newConfig: Config) => void;

export class Command {
  // #region Properties (2)

  callback: Callback = () => {};
  config: Config = {
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

  // #region Public Methods (4)

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
  }

  public setConfig(config: Config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }

  // #endregion Public Methods (4)
}
