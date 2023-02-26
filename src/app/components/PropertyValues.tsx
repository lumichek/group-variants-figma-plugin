import * as React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import DragIcon from '../../icons/DragIcon.svg';

const SortableItem = SortableElement(({ value }) => (
  <li className='sortable__item'>
    <div className='sortable__item-icon'>
      <img src={DragIcon} alt={'Drag icon'} />
    </div>
    <span className='sortable__item-text'>
      {value}
    </span>
  </li>
));

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className='sortable__list'>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export type TPropertyValuesProps = {
  values: string[],
  onChange: (values: string[]) => void
}

export default function PropertyValues(props: TPropertyValuesProps) {
  const {values, onChange} = props;

  const onSortEnd = ({oldIndex, newIndex}) => {
    onChange(arrayMove(values, oldIndex, newIndex));
  };

  return (
    <SortableList items={values} onSortEnd={onSortEnd} />
  );
};
