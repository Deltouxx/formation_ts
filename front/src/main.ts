import "./style.scss";
import { Board } from "./Board";
import { Config } from "./Config";
import { Command } from "./Command";

//https://jlg-formation.github.io/dtv-april-2023/

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
