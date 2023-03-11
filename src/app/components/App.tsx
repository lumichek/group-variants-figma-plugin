import * as React from 'react';
import '../styles.css';
import Property from './Property';
import useMessage from '../hooks/useMessage';
import {
  MESSAGE_CHANGE_PROPERTIES,
  MESSAGE_COMPONENT_NOT_SELECTED,
  MESSAGE_COMPONENT_SELECTED,
  MESSAGE_ERROR,
  MESSAGE_GET_DIRECTIONS,
  MESSAGE_GET_GAPS,
  MESSAGE_GET_PADDINGS,
  MESSAGE_GET_PROPERTIES_WITH_VALUES
} from '../../common/constants';
import {
  SortDirections,
  TDirections,
  TGaps,
  TPaddings,
  TPropertiesList
} from '../../common/types';
import Divider from './Divider';
import PaddingLeftIcon from '../../icons/PaddingLeft.svg'
import PaddingRightIcon from '../../icons/PaddingRight.svg'
import PaddingTopIcon from '../../icons/PaddingTop.svg'
import PaddingBottomIcon from '../../icons/PaddingBottom.svg'
import Input from './Input';

export default function App() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [hasErrors, setHasErrors] = React.useState(false);
  const [properties, setProperties] = React.useState<TPropertiesList>([]);
  const [directions, setDirections] = React.useState<TDirections>({});
  const [gaps, setGaps] = React.useState<TGaps>({});
  const [paddings, setPaddings] = React.useState<TPaddings>(null);

  const postMessage = useMessage({
    [MESSAGE_COMPONENT_NOT_SELECTED]: setIsSelected,
    [MESSAGE_COMPONENT_SELECTED]: setIsSelected,
    [MESSAGE_GET_PROPERTIES_WITH_VALUES]: setProperties,
    [MESSAGE_GET_DIRECTIONS]: setDirections,
    [MESSAGE_GET_GAPS]: setGaps,
    [MESSAGE_GET_PADDINGS]: setPaddings,
    [MESSAGE_ERROR]: setHasErrors
  });
  const onPropertyChangeHandler = (
    propertyKey: string | null,
    {values, direction, gap, paddings: changedPaddings}: {values?: string[], direction?: SortDirections, gap?: number, paddings?: TPaddings}
  ) => {
    let newProperties = properties;
    let newDirections = directions;
    let newGaps = gaps;
    let newPaddings = paddings;

    if (values !== undefined && propertyKey) {
      newProperties = properties.map((item) => item.key === propertyKey ? {
        key: propertyKey,
        values
      } : item);
    }
    if (direction !== undefined && propertyKey) {
      newDirections = {...directions, [propertyKey]: direction};
    }
    if (gap !== undefined && propertyKey) {
      newGaps = {...gaps, [propertyKey]: gap};
    }
    if (changedPaddings !== undefined) {
      newPaddings = changedPaddings;
    }

    setDirections(newDirections);
    setProperties(newProperties);
    setGaps(newGaps);
    setPaddings(newPaddings);

    postMessage({
      type: MESSAGE_CHANGE_PROPERTIES,
      payload: {
        properties: newProperties,
        directions: newDirections,
        gaps: newGaps,
        paddings: newPaddings
      }
    });
  };
  const onChangePadding = (key: 'LEFT' | 'TOP' | 'RIGHT' | 'BOTTOM', val) => {
    onPropertyChangeHandler(null, {paddings: {...paddings, [key]: val}});
  };

  const isReady = isSelected &&
    Object.keys(directions).length > 0 &&
    Object.keys(gaps).length > 0 &&
    properties.length > 0 &&
    !!paddings;

  return (
    <div className='plugin__container'>
      {
        isReady && (
          <div className={'paddings__container'}>
            <div className={'paddings_wrapper'}>
              <span className={'paddings__header'}>
                Paddings
              </span>
              <div className={'paddings__fields'}>
                <div className={'paddings__field'}>
                  <Input
                    type={'outlined-hover'}
                    value={paddings.TOP}
                    leftIcon={<img src={PaddingTopIcon} alt={'Padding top icon'} />}
                    onChange={(val) => onChangePadding('TOP', val)}
                  />
                </div>
                <div className={'paddings__field'}>
                  <Input
                    type={'outlined-hover'}
                    value={paddings.RIGHT}
                    leftIcon={<img src={PaddingRightIcon} alt={'Padding right icon'} />}
                    onChange={(val) => onChangePadding('RIGHT', val)}
                  />
                </div>
                <div className={'paddings__field'}>
                  <Input
                    type={'outlined-hover'}
                    value={paddings.BOTTOM}
                    leftIcon={<img src={PaddingBottomIcon} alt={'Padding bottom icon'} />}
                    onChange={(val) => onChangePadding('BOTTOM', val)}
                  />
                </div>
                <div className={'paddings__field'}>
                  <Input
                    type={'outlined-hover'}
                    value={paddings.LEFT}
                    leftIcon={<img src={PaddingLeftIcon} alt={'Padding left icon'} />}
                    onChange={(val) => onChangePadding('LEFT', val)}
                  />
                </div>
              </div>
            </div>
            <Divider />
          </div>
        )
      }
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
      {!hasErrors && !isSelected && (
        <div className={'error__block'}>
          {'Select a component with a set of at least two variants'}
        </div>
      )}
      {
        hasErrors && (
          <div className={'error__block'}>
            {'Something went wrong, please reload the plugin or check your component'}
          </div>
        )
      }
    </div>
  );
}
