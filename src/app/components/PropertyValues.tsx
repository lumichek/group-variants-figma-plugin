import * as React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import { SectionBlock, SectionTitle } from 'figma-react-ui-kit';
import { MdDragHandle } from 'react-icons/md';

const SortableItem = SortableElement(({ value }) => (
  <li className='sortable-item'>
    <SectionBlock>
      <MdDragHandle />
      <span className='sortable-item-text'>
        <SectionTitle>
          {value}
        </SectionTitle>
      </span>
    </SectionBlock>
  </li>
));

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className='sortable-list'>
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
