import React from "react";
import styled from "styled-components";

type ButtonProps = {
  className?: string;
  col?: string;
  text?: string;
};

const BaseButton = ({ className, col, text }: ButtonProps) => {
  return (
    <button className={`col-md-${col} ${className}`} type="button">
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
