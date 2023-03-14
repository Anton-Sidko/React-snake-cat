import { FC, InputHTMLAttributes } from 'react';

import { InputWrap } from './inputs.styles';

type InputProps = {
  label?: string;
  id: string;
  labelPosition?: 'before' | 'after';
  inputChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({
  label,
  id,
  labelPosition = 'after',
  inputChangeHandler,
  ...checkboxOptions
}): JSX.Element => {
  return (
    <>
      {label && labelPosition === 'before' ? (
        <label htmlFor={id}>{label}</label>
      ) : null}
      <InputWrap>
        <input
          id={id}
          onChange={inputChangeHandler}
          {...checkboxOptions}
        />
        {label && labelPosition === 'after' ? (
          <label htmlFor={id}>{label}</label>
        ) : null}
      </InputWrap>
    </>
  );
};

export default Input;
