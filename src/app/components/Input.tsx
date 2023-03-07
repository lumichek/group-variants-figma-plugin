import * as React from 'react';
import useMultiKeyPress from '../hooks/useMultiKeyPressed';

export type TInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (data: number) => void;
  unit?: string;
}

const Input = React.forwardRef<HTMLInputElement, TInputProps>(({
  unit,
  className,
  ...props
}, ref) => {
  const {value, onChange} = props;
  const keysPressed = useMultiKeyPress();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (keysPressed.has('Shift') && keysPressed.has('ArrowUp')) {
      e.preventDefault();
      onChange(Number(value) + 10);
    } else if (keysPressed.has('Shift') && keysPressed.has('ArrowDown')) {
      e.preventDefault();
      onChange(Number(value) - 10);
    } else {
      onChange(Number(e.target.value));
    }
  }

  return (
    <label className={'input__wrapper'}>
      <input
        {...props}
        type={'number'}
        ref={ref}
        className={'input'}
        value={(Number(value) || 0).toString()}
        onChange={onChangeHandler}
      />
      {unit && (
        <span
          className={'input__unit'}
        >
          {unit}
        </span>
      )}
    </label>
  );
});

export default Input;
