import React from "react";
import styled from "styled-components";

type CommonTextProps = {
  className?: string;
  children: any;
  style?: React.CSSProperties;
};

const CommonText = ({ className, children, style }: CommonTextProps) => {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

export default styled(CommonText)`
  color: gray;
  font-size: 12px;
`;
