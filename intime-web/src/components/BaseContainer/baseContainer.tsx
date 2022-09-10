import React from "react";
import styled from "styled-components";

type BaseContainerProps = {
  className?: string;
  children?: any;
  color?: string;
  border?: string;
  shadow?: string;
};

const BaseContainer = ({
  className,
  children,
  color,
  border,
  shadow,
}: BaseContainerProps) => {
  return (
    <div
      className={className}
      style={{ background: color, border: border, boxShadow: shadow }}
    >
      {children}
    </div>
  );
};

export default styled(BaseContainer)`
  width: 95%;
  height: auto;
  margin-right: 1%;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;
