console.log("CCOUCOURR");

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
const samples = 10;

for (let i = 0; i < samples; i++) {
  const cx = 45;
  const cy = -32 + 3 * i;

  const circle = document.createElementNS(svgns, "circle");

  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);

  container.appendChild(circle);
}
