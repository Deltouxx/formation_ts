import { Point } from "./Point";
import { cx0, cy0, r0 } from "./constant";

export const getAngle = (index: number, samples: number): number => {
  return (index * 2 * Math.PI) / samples - Math.PI;
};

export const getPoint = (angle: number): Point => {
  return { x: cx0 + r0 * Math.cos(angle), y: cy0 + r0 * Math.sin(angle) };
};
