import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Pill
} from "../layout-components";

const FILL_ME_IN = "";

export const QuestionCard = () => {
  // TODO: Add work here

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h3">
          {" "}
          Which of these foods do you consume the most? {FILL_ME_IN}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol style={{ listStyle: "none" }}>
          <li>A. Pizza</li>
          <li>B. Tacos</li>
          <li>C. Salad</li>
          <li>D. Smoothies</li>
        </ol>
      </CardContent>
      <CardFooter>
        <Pill>Type: {FILL_ME_IN}</Pill>
      </CardFooter>
    </Card>
  );
};
