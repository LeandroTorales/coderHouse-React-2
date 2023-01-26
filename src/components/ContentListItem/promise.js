import { dataObjectsItems } from "../dataObjects/data";

export const getPromiseItems = async () => {
  let respuesta = await dataObjectsItems;
  return respuesta;
};

export const getByCategoryItems = async (categoryId) => {
  let itemsCategory = dataObjectsItems.filter(
    (item) => item.category == categoryId
  );
  let respuesta = itemsCategory;
  return respuesta;
};
