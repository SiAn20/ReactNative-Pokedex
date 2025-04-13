import { POKEMON_TYPE_COLORS } from "./constants.js";

const getColorByType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
};
export default getColorByType;
