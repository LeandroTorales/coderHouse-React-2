import { dataObjectsItems } from "../dataObjects/data";

export const getPromiseItems = async () => {
  let respuesta = await dataObjectsItems;
  return respuesta;
};

export const getByCategoryItems = async (categoryName) => {
  let itemsCategory = dataObjectsItems.filter(
    (item) => item.category === categoryName
  );
  let respuesta = itemsCategory;
  return respuesta;
};
