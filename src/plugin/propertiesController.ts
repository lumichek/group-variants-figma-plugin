import { sortProperties } from "./services/sorting";
import { extractPropertiesFromComponent as fetchProperties } from "./services/properties";
import { collectGaps as calculatePropertiesGaps } from "./services/sorting";

export {
  sortProperties,
  fetchProperties,
  calculatePropertiesGaps
};
