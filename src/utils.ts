// both values inclusive
export const randInt = (min: number, max: number): number => {
  const rand = Math.random();
  return Math.floor(min + (max - min + 1) * rand);
};
