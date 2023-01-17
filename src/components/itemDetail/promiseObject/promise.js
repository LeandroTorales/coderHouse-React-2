import { dataObjectsItems } from "../../dataObjects/data";

export const getPromiseSingleItem = async (queryParam) => {
  let respuesta = dataObjectsItems.find(
    (item) => item.id === Number(queryParam)
  );
  return respuesta;
};
