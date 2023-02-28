import * as React from 'react';
import { SortableContainer, SortableContainerProps, SortableElement, SortableElementProps } from 'react-sortable-hoc';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import DragIcon from '../../icons/DragIcon';

interface ISortableItemProps extends SortableElementProps {
  value: string;
  className?: string
}
interface ISortableContainerProps extends SortableContainerProps {
  items: string[];
  className?: string;
}

const SortableItem: React.ComponentClass<ISortableItemProps, any> = SortableElement(({ value }: ISortableItemProps) => (
  <li className='sortable__item'>
    <div className='sortable__item-icon'>
      <DragIcon />
    </div>
    <span className='sortable__item-text'>
      {value}
    </span>
  </li>
));

const SortableList: React.ComponentClass<ISortableContainerProps, any> = SortableContainer(({items}: ISortableContainerProps) => {
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
    <SortableList items={values} onSortEnd={onSortEnd} helperClass='sortable__item_dragged'  />
  );
};
