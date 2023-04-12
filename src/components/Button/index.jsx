import React from "react";
import * as S from "./styled";

export function Button(props) {
  return (
    <S.Wrapper
      whileTap={{
        y: 1,
        scale: 0.9,
      }}
      size="1.2rem"
      color="dodgerblue"
      variant="solid"
    >
      {props.children}
    </S.Wrapper>
  );
}
