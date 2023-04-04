import React from "react";
import { theme } from "../../theme/theme";
import * as S from "./styled";

export default {
  title: "Button",
  component: S.Wrapper,
  args: {
    children: "Texto do Botão",
  },
};

const p = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;

const s = ({ children }) => (
  <S.Wrapper color={theme.colors.secondary}>{children}</S.Wrapper>
);

export const Default = p.bind({});
export const Secondary = s.bind({});
