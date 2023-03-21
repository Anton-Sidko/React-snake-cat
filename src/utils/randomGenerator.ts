export const generateRandomInt = function (min: number, max: number): number {
  return Math.round(min + Math.random() * (max - min));
};

export const getRandomArrayElement = function <T>(array: T[]): T {
  const randomIndex = generateRandomInt(0, array.length - 1);
  return array[randomIndex];
};
