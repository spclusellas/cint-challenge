import React from "react";

import { PageHeader } from "./layout-components";

import { QuestionBuilderContent } from "./components";

import { GlobalStyles } from "./layout-components";

export const App = () => {
  return (
    <>
      <PageHeader />
      <QuestionBuilderContent />
      <GlobalStyles />
    </>
  );
};
