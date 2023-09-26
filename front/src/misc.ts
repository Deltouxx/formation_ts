export const $ = (selector: string): Element => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannont find selector ${selector}`);
  }
  return elt;
};
