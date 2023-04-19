import { Button, ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    color: "#282828",
    size: "medium",
  },
};

const s = ({ children, color, size }: ButtonProps) => (
  <Button size={size} color={color} variant="solid">
    {children}
  </Button>
);

const g = ({ children, color, size }: ButtonProps) => (
  <Button size={size} color={color} variant="ghost">
    {children}
  </Button>
);

const t = ({ children, color, size }: ButtonProps) => (
  <Button size={size} color={color} variant="text">
    {children}
  </Button>
);

export const Solid = s.bind({});
export const Ghost = g.bind({});
export const Text = t.bind({});
