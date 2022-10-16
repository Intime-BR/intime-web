import React, { MouseEventHandler } from "react";
import styled from "styled-components";

type ButtonProps = {
  className?: string;
  col?: string;
  text?: string;
  onClick?: () => void;
  style?: React.CSSProperties
};

const BaseButton = ({ className, col, text, onClick, style}: ButtonProps) => {
  return (
    <button
      className={`col-md-${col} ${className}`}
      type="button"
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default styled(BaseButton)`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.lightPrimary};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 6px;
`;
