import * as React from 'react';

import RowsIcon from '../../icons/RowsIcon.svg';
import ColumnsIcon from '../../icons/ColumnsIcon.svg';

export type TToggleProps = {
  id: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle(props: TToggleProps) {
  const { onChange, id, isChecked } = props;

  const onChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  }, [onChange]);

  return (
    <label className={'toggle__wrapper'}>
      <input
        id={id}
        className={'toggle__input'}
        onChange={onChangeHandler}
        type="checkbox"
        checked={isChecked}
      />
      <span className={'toggle__container'}>
      <div className={'toggle__block'}>
        <img src={RowsIcon} alt={'Rows icon'} />
      </div>
      <div className={'toggle__block'}>
        <img src={ColumnsIcon} alt={'Columns icon'} />
      </div>
      </span>
    </label>
  );
};
