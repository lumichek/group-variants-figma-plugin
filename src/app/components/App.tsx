import * as React from 'react';
import { Section, SectionBlock } from 'figma-react-ui-kit';
import '../../../node_modules/figma-react-ui-kit/lib/index.css';
import '../styles.css';
import Property from './Property';
import useMessage from '../hooks/useMessage';
import {
  MESSAGE_CHANGE_PROPERTIES,
  MESSAGE_COMPONENT_NOT_SELECTED,
  MESSAGE_COMPONENT_SELECTED,
  MESSAGE_GET_DIRECTIONS,
  MESSAGE_GET_GAPS,
  MESSAGE_GET_PROPERTIES
} from '../../common/constants';
import {
  SortDirections,
  TDirections,
  TGaps,
  TPropertiesList
} from '../../common/types';

export default function App() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [properties, setProperties] = React.useState<TPropertiesList>([]);
  const [directions, setDirections] = React.useState<TDirections>({});
  const [gaps, setGaps] = React.useState<TGaps>({});

  const postMessage = useMessage({
    [MESSAGE_COMPONENT_NOT_SELECTED]: setIsSelected,
    [MESSAGE_COMPONENT_SELECTED]: setIsSelected,
    [MESSAGE_GET_PROPERTIES]: setProperties,
    [MESSAGE_GET_DIRECTIONS]: setDirections,
    [MESSAGE_GET_GAPS]: setGaps
  });
  const onPropertyChangeHandler = (
    propertyKey: string,
    {values, direction, gap}: {values?: string[], direction?: SortDirections, gap?: number}
  ) => {
    let newProperties = properties;
    let newDirections = directions;
    let newGaps = gaps;

    if (values !== undefined) {
      newProperties = properties.map((item) => item.key === propertyKey ? {
        key: propertyKey,
        values
      } : item);
    }
    if (direction !== undefined) {
      newDirections = {...directions, [propertyKey]: direction};
    }
    if (gap !== undefined) {
      newGaps = {...gaps, [propertyKey]: gap};
    }

    setDirections(newDirections);
    setProperties(newProperties);
    setGaps(newGaps);

    postMessage({
      type: MESSAGE_CHANGE_PROPERTIES,
      payload: {
        properties: newProperties,
        directions: newDirections,
        gaps: newGaps
      }
    });
  };

  const isReady = isSelected &&
    Object.keys(gaps).length > 0 &&
    Object.keys(gaps).length > 0 &&
    properties.length > 0;

  return (
    <div className='sections-container'>
      {
        isReady && properties.map(({key, values}) => (
          <Property
            key={key}
            title={key}
            values={values}
            direction={directions[key]}
            gap={gaps[key]}
            onChange={onPropertyChangeHandler}
          />
        ))
      }
      {!isSelected && (
        <Section>
          <SectionBlock>{'Select a component with a set of at least two variants'}</SectionBlock>
        </Section>
      )}
    </div>
  );
}
