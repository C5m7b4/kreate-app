import React from 'react';

import './Button.css';

export interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style: React.CSSProperties;
}

const Button: React.FC = (props: ButtonProps) => {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
