import { Class } from "./interface/Class";

export const $ = <T extends Element>(selector: string, type?: Class<T>): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannont find selector ${selector}`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(`selector ${selector} is not of type ${type}`);
  }
  return elt as T;
};

export const setAttributeNbr = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const getKeys = <T extends object>(o: T): (keyof T)[] => {
  return Object.keys(o) as (keyof T)[];
};

type millisecond = number;

export const sleep = (delay: millisecond): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
