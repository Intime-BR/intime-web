import React from "react";
import styled from "styled-components";

type CommonTextProps = {
  className?: string;
  children: any;
};

const CommonText = ({ className, children }: CommonTextProps) => {
  return <p>{children}</p>;
};

export default styled(CommonText)`
  color: gray;
  font-size: 12px;
`;
