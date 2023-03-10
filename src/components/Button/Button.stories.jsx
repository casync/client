import React from "react";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Texto do botão",
  },
};

const Template = ({ children, ...rest }) => <Button>{children}</Button>;

export const Basic = Template.bind({});

Basic.args = {};
