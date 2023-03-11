export const enum SortDirections {
  ROWS ='ROWS',
  COLUMNS = 'COLUMNS'
};

export type Size = {
  width: number;
  height: number;
}

export const PropertiesMapType = 'MAP';
export const PropertiesListType = 'LIST';
export type TPropertiesType = typeof PropertiesMapType | typeof PropertiesListType;

export type TPropertiesMap = {
  [key: string]: string[]
};

export type TProperty = {
  key: string;
  values: string[];
};
export type TPropertiesList = Array<TProperty>;

export type TPropertiesValues = {
  [key: keyof TPropertiesMap]: string;
};

export type TPropertiesValuesList = Array<{
  key: string;
  value: string;
}>;

export type TBorders = {
  xFrom: number;
  yFrom: number;
  xBefore: number;
  yBefore: number;
  yMax?: boolean;
  yMin?: boolean;
  xMax?: boolean;
  xMin?: boolean;
};

export type TDirections = {
  [key: keyof TPropertiesMap]: SortDirections
};

export type TGaps = {
  [key: keyof TPropertiesMap]: number
};

export type TMessage<T = any> = {
  readonly type: string;
  readonly payload?: T;
};

export type TOptions = {
  directions: TDirections;
  gaps?: TGaps;
  paddings?: TPaddings
};

export type TVariant = ComponentNode;
export type TVariants = ComponentNode[];
export type TVariantsParent = ComponentSetNode;

export type TPropertiesValuesOrders = {
  [key: string]: string[];
};

export type TPaddings = {
  LEFT: number;
  TOP: number;
  RIGHT: number;
  BOTTOM: number;
};
