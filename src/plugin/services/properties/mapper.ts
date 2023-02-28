import { TPropertiesMap, TPropertiesList } from '../../../common/types';
import { PROPERTY_VARIANT_TYPE } from '../../../common/constants';

export function mapProperties(rawProperties: ComponentPropertyDefinitions): TPropertiesMap {
  return Object.keys(rawProperties).reduce((acc, propertyKey) => {
    if (rawProperties[propertyKey].type === PROPERTY_VARIANT_TYPE) {
      acc[propertyKey] = rawProperties[propertyKey].variantOptions
    };

    return acc;
  }, {});
}

export function mapPropertiesToList(rawProperties: ComponentPropertyDefinitions): TPropertiesList {
  return Object.keys(rawProperties).reduce((acc, propertyKey) => {
    if (rawProperties[propertyKey].type === PROPERTY_VARIANT_TYPE) {
      acc.push({
        key: propertyKey,
        values: rawProperties[propertyKey].variantOptions
      });
    };

    return acc;
  }, []);
}
