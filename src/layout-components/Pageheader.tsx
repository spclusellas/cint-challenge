import React from "react";

import styled from "styled-components";

import { Logo } from "./Logo";

const StyledPageHeader = styled.div`
  display: flex;
  background: #0f0d08;
  min-width: 100%;
  height: 5.5rem;
  align-items: flex-start;
`;

const PageTitle = styled.h2`
  display: flex;
  align-self: center;
  color: #fff;
  margin-top: 0.25rem;
`;

export const PageHeader = () => (
  <StyledPageHeader>
    <Logo />
    <PageTitle>Question Builder</PageTitle>
  </StyledPageHeader>
);
