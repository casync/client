import React from "react";
import * as S from "./styled";

export function Button({ children, variant, size, color }) {
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
