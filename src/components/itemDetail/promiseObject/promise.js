import { dataObjectsItems } from "../../dataObjects/data";

export const getPromiseSingleItem = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataObjectsItems[0]);
    }, 200);
  });
};
