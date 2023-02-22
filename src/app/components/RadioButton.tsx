import { SectionTitle } from 'figma-react-ui-kit';
import * as React from 'react';

export type TRadioButtonProps = {
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function RadioButton (props: TRadioButtonProps) {
  const { onChange, id, isSelected, label, value } = props;

  const onChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div className="radio-button">
      <input
        id={id}
        onChange={onChangeHandler}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>
        <SectionTitle>
          {label}
        </SectionTitle>
      </label>
    </div>
  );
};
