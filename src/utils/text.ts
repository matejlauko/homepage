export const truncate = (str: string, n: number) => {
  if (str.length <= n) {
    return str;
  }

  const subString = str.slice(0, n - 1);

  return subString.slice(0, subString.lastIndexOf(' ')) + '&hellip;';
};
