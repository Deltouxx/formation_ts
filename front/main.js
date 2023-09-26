console.log("CCOUCOURR");

const cx0 = 0;
const cy0 = 0;
const r0 = 55;
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
const samples = 300;
const multiplicationFactor = 3;

//add small circle
for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples + Math.PI / 2;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);
  const circle = document.createElementNS(svgns, "circle");

  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);

  container.appendChild(circle);
}

//draw lines
const lineContainer = document.querySelector("g.lines");
for (let i = 0; i < samples; i++) {
  const angle1 = (i * 2 * Math.PI) / samples - Math.PI / 2;
  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);

  const angle2 =
    (i * multiplicationFactor * 2 * Math.PI) / samples - Math.PI / 2;
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);
  const lines = document.createElementNS(svgns, "line");

  lines.setAttributeNS(null, "x1", x1);
  lines.setAttributeNS(null, "y1", y1);
  lines.setAttributeNS(null, "x2", x2);
  lines.setAttributeNS(null, "y2", y2);

  lineContainer.appendChild(lines);
}
