import {
  TBorders,
  SortDirections,
  TPropertiesMap,
  TDirections,
  TPropertiesValues,
  TVariant,
  TVariants,
  TPropertiesValuesList,
  TPaddings
} from './../../../common/types';

export function findRowGap(prevVariant: TVariant, variant: TVariant, variants: TVariants) {
  let gap = variant.y - prevVariant.y - prevVariant.height;
  let borders: TBorders = {
    xFrom: 0,
    yFrom: prevVariant.y,
    xBefore: Number.MAX_SAFE_INTEGER,
    yBefore: variant.y - 1
  };
  const next = findNextVariant(variants);

  let root = prevVariant;

  while (root) {
    const newGap = variant.y - root.y - root.height;

    if (newGap < gap) {
      gap = newGap;
    }

    borders = {
      xFrom: root.x + root.width,
      yFrom: prevVariant.y,
      xBefore: Number.MAX_SAFE_INTEGER,
      yBefore: variant.y - gap
    };

    root = next(borders);
  }

  return gap < 0 ? 0 : gap;
}

export function findColumnGap(prevVariant: TVariant, variant: TVariant, variants: TVariants) {
  let gap = variant.x - prevVariant.x - prevVariant.width;

  let borders: TBorders = {
    xFrom: prevVariant.x,
    yFrom: 0,
    xBefore: variant.x - 1,
    yBefore: Number.MAX_SAFE_INTEGER
  };
  const next = findNextVariant(variants);

  let root = prevVariant;

  while (root) {
    const newGap = variant.x - root.x - root.width;

    if (newGap < gap) {
      gap = newGap;
    }

    borders = {
      xFrom: prevVariant.x,
      yFrom: root.y + root.height,
      xBefore: variant.x - gap,
      yBefore: Number.MAX_SAFE_INTEGER
    };

    root = next(borders);
  }

  return gap < 0 ? 0 : gap;
}

export function findNextVariant(variants: TVariants) {
  return function(borders: TBorders): TVariant {
    const {
      xFrom,
      yFrom,
      xBefore,
      yBefore,
      yMax,
      yMin,
      xMax,
      xMin
    } = borders;

    let result: TVariant = null;
    let xMinValue = Number.MAX_SAFE_INTEGER;
    let yMinValue = Number.MAX_SAFE_INTEGER;

    for (const variant of variants) {
      // check borders
      if (
        variant.x >= xFrom &&
        variant.y >= yFrom &&
        variant.x <= xBefore &&
        variant.y <= yBefore
      ) {
        let isFound = false;

        if (xMin && yMin && (variant.x + variant.y) < (xMinValue + yMinValue)) {
          isFound = true;
        } else if (xMin && yMax && (variant.x < xMinValue || variant.x === xMinValue && variant.y >= yMinValue)) {
          isFound = true;
        } else if (yMin && xMax && (variant.y < yMinValue || variant.y === yMinValue && variant.x >= xMinValue)) {
          isFound = true;
        } else if (xMin && (variant.x < xMinValue || variant.x === xMinValue && variant.y < yMinValue)) {
          isFound = true;
        } else if (yMin && (variant.y < yMinValue || variant.y === yMinValue && variant.x < xMinValue)) {
          isFound = true;
        } else if (variant.x <= xMinValue && variant.y <= yMinValue) {
          isFound = true;
        }

        if (isFound) {
          result = variant;
          xMinValue = variant.x;
          yMinValue = variant.y;
        }
      }
    }

    return result;
  }
};

export function compareProperties(properties: TPropertiesMap) {
  return function(
    rootPropertiesValues: TPropertiesValues,
    currentPropertiesValues: TPropertiesValues | undefined
  ): {keys: string[]; values: Record<string, string[]>} {
    if (!currentPropertiesValues) {
      return {keys: [], values: {}};
    }

    const keys: string[] = [];
    const values: Record<string, string[]> = {};

    for(const key of Object.keys(properties)) {
      if (rootPropertiesValues[key] !== currentPropertiesValues[key]) {
        keys.push(key);

        if (!values[key]) {
          values[key] = [rootPropertiesValues[key]];
        }
        values[key].push(currentPropertiesValues[key]);
      }
    }

    return {keys, values};
  }
}

export function collectProperties(
  compareFn: (a: TPropertiesValues, b: TPropertiesValues) => {
    keys: string[];
    values: Record<string, string[]>
  },
  root: TVariant,
  variant: TVariant | null
) {
  return compareFn(root.variantProperties, variant?.variantProperties);
}

export function fillDirections(
  properties: Array<keyof TPropertiesMap>, direction: SortDirections
): TDirections {
  return properties.reduce((directions: TDirections, property) => {
    directions[property] = direction;

    return directions;
  }, {});
}

export function mapPropertiesValuesToStr(propertiesValues: TPropertiesValuesList): string {
  return propertiesValues.map(({key, value}) => `${key}=${value}`).join(', ');
}

export function findNewPaddings(paddings: TPaddings, variant: TVariant) {
  const newPaddings = {...paddings};

  if (variant.x < paddings.LEFT) {
    newPaddings.LEFT = variant.x;
  }
  if ((variant.x + variant.width) > paddings.RIGHT) {
    newPaddings.RIGHT = variant.x + variant.width;
  }
  if (variant.y < paddings.TOP) {
    newPaddings.TOP = variant.y;
  }
  if ((variant.y + variant.height) > paddings.BOTTOM) {
    newPaddings.BOTTOM = variant.y + variant.height;
  }

  return newPaddings;
}
