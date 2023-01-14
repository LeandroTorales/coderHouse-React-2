import { dataObjectsItems } from "./data";

export const getPromiseItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataObjectsItems);
    }, 2000);
  });
};
