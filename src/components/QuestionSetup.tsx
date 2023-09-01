import React from "react";

import styled from "styled-components";

import { AddQuestionButton } from "../layout-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 0.5rem;
  margin: 10px;
  margin-left: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

const Select = styled.select`
  min-height: 2.17rem;
  min-width: 8rem;
  font-size: 14px;
  padding: 0.25rem;
  margin: 10px;
  margin-left: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const QuestionSetup = () => {
  return (
    <Row>
      <Label>
        Question
        <Input type="text" placeholder="Title" />
      </Label>
      <Label>
        Type
        <Select>
          <option>multiple choice</option>
          <option>true/false</option>
          <option>text</option>
        </Select>
      </Label>
      <AddQuestionButton type="button">Add Question</AddQuestionButton>
    </Row>
  );
};
