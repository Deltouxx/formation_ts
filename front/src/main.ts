import "./style.css";
import { multiplicationFactor, samples, svgns } from "./constant";
import { $, setAttributeNbr } from "./misc";
import { getAngle, getPoint } from "./maths";

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
