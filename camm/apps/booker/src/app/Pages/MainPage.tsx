import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledContainer = styled(Container)`
  margin-top: 1.5rem;
`;

export const MainPage = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <h1>Hello World</h1>
      </StyledRow>
    </StyledContainer>
  );
};
