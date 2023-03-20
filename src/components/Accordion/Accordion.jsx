import React, { useState } from 'react';
import data from './data';
import './Accordion.css';

export function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const accordionToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <h2 className="title" onClick={accordionToggle}>
        {title}
      </h2>
      <div className="content">{toggle && <p>{content}</p>}</div>
    </div>
  );
}
