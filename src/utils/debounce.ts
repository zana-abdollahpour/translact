// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const debounce = (fn) => {
  let id: number | null = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};
