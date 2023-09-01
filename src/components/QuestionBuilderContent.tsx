import React from "react";

import { QuestionSetup } from "./QuestionSetup";

import { QuestionList } from "./QuestionList";

import { Container } from "../layout-components";

export const QuestionBuilderContent = () => {
  return (
    <Container>
      <QuestionSetup />
      <QuestionList />
    </Container>
  );
};
