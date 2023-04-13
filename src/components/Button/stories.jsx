import React from "react";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    color: "#282828",
    size: "1.1rem",
  },
};

const s = ({ children, color, size }) => (
  <Button size={size} color={color} variant="solid">
    {children}
  </Button>
);

const g = ({ children, color, size }) => (
  <Button size={size} color={color} variant="ghost">
    {children}
  </Button>
);

const t = ({ children, color, size }) => (
  <Button size={size} color={color} variant="text">
    {children}
  </Button>
);

export const Solid = s.bind({});
export const Ghost = g.bind({});
export const Text = t.bind({});
