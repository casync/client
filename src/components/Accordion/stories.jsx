import React from "react";
import { Accordion } from "./index";

export default {
  title: "Accordion",
  component: Accordion,
  args: {
    title: "Title",
    content: "Content",
  },
};

const Template = ({ title, content }) => (
  <Accordion
    title={<h2>Title 1</h2>}
    content={
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        porro, aliquid ullam asperiores laboriosam iusto corporis earum nostrum
      </p>
    }
  ></Accordion>
);

export const Default = Template.bind({});

Default.args = {};
