import React from "react";
import * as S from "./styled";

export default {
  title: "Button",
  component: S.Wrapper,
  args: {
    children: "Button",
    color: "#282828",
    size: "1.1rem",
  },
};

const s = ({ children, color, size }) => (
  <S.Wrapper
    whileTap={{
      y: 1,
      scale: 0.9,
    }}
    size={size}
    color={color}
    variant="solid"
  >
    {children}
  </S.Wrapper>
);

const g = ({ children, color, size }) => (
  <S.Wrapper size={size} color={color} variant="ghost">
    {children}
  </S.Wrapper>
);

const t = ({ children, color, size }) => (
  <S.Wrapper size={size} color={color} variant="text">
    {children}
  </S.Wrapper>
);

export const Solid = s.bind({});
export const Ghost = g.bind({});
export const Text = t.bind({});
