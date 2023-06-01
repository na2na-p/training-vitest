export type ButtonProps = {
  disabled?: boolean;
  dataTestid?: string;
} & JSX.IntrinsicElements['button'];

const Button = ({
  type = 'button',
  disabled = false,
  dataTestid,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      data-testid={dataTestid}
      type={type}
      disabled={disabled}
    />
  );
};

export default Button;
