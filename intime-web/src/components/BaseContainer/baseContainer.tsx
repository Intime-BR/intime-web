import React from "react";
import styled from "styled-components";

type BaseContainerProps = {
  className?: string;
  children?: any;
};

const BaseContainer = ({ className, children }: BaseContainerProps) => {
  return <div className={className}>{children}</div>;
};

export default styled(BaseContainer)`
  width: 95%;
  max-height: 100%;
  background: #fff;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;
