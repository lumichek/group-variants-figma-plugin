import * as React from 'react';
import useMultiKeyPress from '../hooks/useMultiKeyPressed';

type TInputType = 'outlined' | 'outlined-hover';

export type TInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (data: number) => void;
  leftIcon?: React.ReactElement;
  type?: TInputType;
  unit?: string;
}

const Input = React.forwardRef<HTMLInputElement, TInputProps>(({
  type = 'outlined',
  leftIcon,
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
    <div className='input__container'>
      <label className={`input__wrapper ${type === 'outlined-hover' ? 'input__wrapper-hover' : ''}`}>
        {
          leftIcon && (
            <div className='input__icon'>
              {leftIcon}
            </div>
          )
        }
        <input
          {...props}
          type={'number'}
          ref={ref}
          className={'input'}
          value={(Number(value) || 0).toString()}
          onChange={onChangeHandler}
          />
      </label>
      {unit && (
        <span className={'input__unit'}>
          {unit}
        </span>
      )}
    </div>
  );
});

export default Input;
