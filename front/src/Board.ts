import { Config } from "./Config";
import { svgns } from "./constant";
import { getAngle, getPoint } from "./maths";
import { $, setAttributeNbr } from "./misc";

export class Board {
  // #region Properties (1)
  //# pour private
  #config: Config = { samples: 0, multiplicationFactor: 0 };

  // #endregion Properties (1)

  // #region Public Methods (2)

  public draw() {
    this.clean();
    const { samples, multiplicationFactor } = this.#config;
    //add small circle
    const sampleContainer = $("g.samples");
    if (sampleContainer === null) {
      throw new Error("OUPSSS");
    }
    for (let i = 0; i < samples; i++) {
      const angle = getAngle(i, samples);
      const { x: cx, y: cy } = getPoint(angle);

      const circle = document.createElementNS(svgns, "circle");
      /*
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy.toString());
  circle.setAttributeNS(null, "r", "1");
*/

      setAttributeNbr(circle, "cx", cx);
      setAttributeNbr(circle, "cy", cy);
      setAttributeNbr(circle, "r", 1);

      sampleContainer.appendChild(circle);
    }

    //draw lines
    const lineContainer = $("g.lines");
    if (lineContainer === null) {
      throw new Error("OUPSSS");
    }
    for (let i = 0; i < samples; i++) {
      const p1 = getPoint(getAngle(i, samples));
      const p2 = getPoint(getAngle(i * multiplicationFactor, samples));

      const lines = document.createElementNS(svgns, "line");

      setAttributeNbr(lines, "x1", p1.x);
      setAttributeNbr(lines, "y1", p1.y);
      setAttributeNbr(lines, "x2", p2.x);
      setAttributeNbr(lines, "y2", p2.y);

      lineContainer.appendChild(lines);
    }
  }
  clean() {
    $("g.samples").innerHTML = "";
    $("g.lines").innerHTML = "";
  }

  public setConfig(config: Config) {
    this.#config = config;
  }

  // #endregion Public Methods (2)
}
