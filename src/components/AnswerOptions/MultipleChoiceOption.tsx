import React from "react";

import styled from "styled-components";

import { Col } from "../../layout-components";

const Label = styled.label`
  font-size: 16px;
  margin: 0.5rem 0.8rem;
  padding: 0rem 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  text-align: start;
`;

const LabelledCheckbox = ({
  inputType,
  name,
  inputValue,
  labelText,
  checked
}) => {
  return (
    <Label>
      <Checkbox
        type={inputType}
        name={name}
        value={inputValue}
        checked={checked}
      />
      {labelText}
    </Label>
  );
};

export const MultipleChoiceOption = () => {
  // TODO: Add work here
  return (
    <>
      <Col>
        <LabelledCheckbox
          labelText="Option A"
          inputType="checkbox"
          name="Option A"
          inputValue="option_a"
        />
        <LabelledCheckbox
          labelText="Option B"
          inputType="checkbox"
          name="Option B"
          inputValue="option_b"
        />
        <LabelledCheckbox
          labelText="Option C"
          inputType="checkbox"
          name="Option C"
          inputValue="option_c"
        />
        <LabelledCheckbox
          labelText="Option D"
          inputType="checkbox"
          name="Option D"
          inputValue="option_d"
        />
      </Col>
    </>
  );
};
