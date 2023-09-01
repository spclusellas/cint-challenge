import React from "react";

import styled from "styled-components";

const Input = styled.input`
  font-size: 12px;
  padding: 0.25rem;
  margin: 0.5rem;
  margin-left: 1.25rem;
  max-height: 2rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const TextOption = () => {
  return <Input type="text" placeholder="Type answer here" />;
};
