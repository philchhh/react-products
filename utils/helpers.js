export function classnames(o) {
  return Object.keys(o)
    .reduce((acc, k) => {
      if (o[k]) {
        acc.push(k);
      }
      return acc;
    }, [])
    .join(" ");
}
