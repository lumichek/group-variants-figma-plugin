import * as React from 'react';
import PropertyValues from './PropertyValues';
import { SortDirections } from '../../common/types';
import Toggle from './Toggle';
import Input from './Input';
import Divider from './Divider';

export type TPropertyProps = {
  title: string;
  values: string[];
  direction: SortDirections | undefined;
  gap: number | undefined;
  onChange: (
    propertyKey: string,
    {values, direction, gap}: {values?: string[], direction?: SortDirections, gap?: number}
  ) => void;
}

export default function Property(props: TPropertyProps) {
  const {title, values, onChange, direction, gap} = props;

  const onChangeGap = (newGap: number) => {
    onChange(title, {gap: newGap});
  };
  const onChangeDirection = (isColumns) => {
    onChange(title, {direction: isColumns ? SortDirections.COLUMNS : SortDirections.ROWS});
  };
  const onChangeValues = (sortedValues: string[]) => {
    onChange(title, {values: sortedValues});
  };

  return (
    <div className='section__container'>
      <div className='section__header'>
        <span className='section__title'>
          {title}
        </span>
        <div className='section__controls'>
          <Toggle
            onChange={onChangeDirection}
            id={`${title}-columns`}
            isChecked={direction === SortDirections.COLUMNS}
          />
          <Input value={gap || 0} onChange={onChangeGap} unit={'px'} />
        </div>
      </div>
      <PropertyValues values={values} onChange={onChangeValues} />
      <Divider />
    </div>
  );
};
