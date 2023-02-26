import * as React from 'react';

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  unit?: string;
}

const Input = React.forwardRef<HTMLInputElement, TInputProps>(({
  unit,
  className,
  ...props
}, ref) => {
  return (
    <label className={'input__wrapper'}>
      <input
        {...props}
        ref={ref}
        className={'input'}
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
