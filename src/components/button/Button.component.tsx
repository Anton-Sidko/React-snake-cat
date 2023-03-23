import { ButtonHTMLAttributes, FC } from 'react';
import { BaseButton } from './Button.styles';

export type ButtonProps = {
  buttonText: string;
  buttonHandler?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  buttonText,
  buttonHandler,
  ...otherProps
}): JSX.Element => {
  return (
    <BaseButton
      onClick={buttonHandler}
      {...otherProps}
    >
      {buttonText}
    </BaseButton>
  );
};

export default Button;
