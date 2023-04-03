import React from "react";
import * as S from "./styled";
import { theme } from "../../theme/theme";

export function Button(props) {
  return (
    <>
      <S.Wrapper
        whileTap={{
          y: 1,
          scale: 0.9,
        }}
      >
        {props.children}
      </S.Wrapper>
    </>
  );
}
