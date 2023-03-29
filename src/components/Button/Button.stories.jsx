import React from "react";

import Button from "./Button.styled";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Texto do Botão",
  },
};

const p = ({ children }) => <Button>{children}</Button>;

const s = ({ children }) => <Button secondary large>{children}</Button>;

export const Default = p.bind({});
export const Secondary = s.bind({});
