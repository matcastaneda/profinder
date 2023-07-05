export const formattedNumber = (value: number): string => {
  if (value < 1000) {
    return value.toString();
  } else if (value >= 1000 && value < 1000000) {
    return `${Math.round(value / 1000)}k`;
  } else {
    return `${(value / 1000000).toFixed(1)}M`;
  }
};
