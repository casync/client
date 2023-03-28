import React from "react";

import Button from "./Button.styled";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Texto do Botão",
  },
};

const p = ({ children, ...rest }) => <Button>{children}</Button>;

const s = (props) => <Button secondary>{props.children}</Button>;

export const Default = p.bind({});
export const Secondary = s.bind({});

p.args = {};
s.args = {};
