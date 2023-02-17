export const sliceString = (s?: string, length = 50) => {
  if (!s) {
    return '';
  }
  if (s.length <= length) {
    return s;
  }
  return s.slice(0, length) + '...';
};
