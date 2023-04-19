import * as S from "./styled";

export type ButtonProps = {
  color?: string;
  variant?: string;
  size?: string;
  children: any;
};

export function Button({
  children,
  variant = "solid",
  size = "medium",
  color,
}: ButtonProps) {
  return (
    <S.Wrapper
      whileTap={{
        y: 1,
        scale: 0.9,
      }}
      color={color}
      variant={variant}
      size={size}
    >
      {children}
    </S.Wrapper>
  );
}
