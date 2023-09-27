import "./style.scss";
import { Board } from "./Board";

//https://jlg-formation.github.io/dtv-april-2023/

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
board.draw();
