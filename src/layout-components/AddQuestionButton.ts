import styled from "styled-components";

export const AddQuestionButton = styled.button`
  display: flex;
  color: white;
  margin: 10px;
  margin-left: 2px;
  cursor: pointer;
  padding: 0.65rem;
  background: linear-gradient(90deg, #ee6352, #e3e944, #ee6352);
  background-size: 300%;
  background-position: left;
  transition: background-position 350ms;
  border-radius: 10px;
  border: 0;
  align-items: center;
  align-self: flex-end;
  width: fit-content;
  &:focus {
    border: 1px solid blue;
  }
  &:hover {
    background-position: right;
  }
`;
