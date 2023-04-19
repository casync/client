import { Accordion, AccordionProps } from "./index";

export default {
  title: "Accordion",
  component: Accordion,
  args: {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati porro, aliquid ullam asperiores laboriosam iusto corporis earum nostrum",
  },
};

const Template = ({ content }: AccordionProps) => (
  <Accordion title={<h2>Title</h2>} content={content}></Accordion>
);

export const Default = Template.bind({});
