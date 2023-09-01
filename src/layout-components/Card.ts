import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  padding: 0.5rem 1rem 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
  max-height: 20rem;
  width: 100%;
  max-width: 32rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  margin-left: 4px;
  margin-right: 4px;
  padding: 8px 4px;
  align-self: center;
  text-align: center;
`;

export const CardTitle = styled.h3`
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

export const CardContent = styled.div`
  display: flex;
  padding: 0px;
  min-height: 3rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  padding: 4px 8px 0px;
`;
