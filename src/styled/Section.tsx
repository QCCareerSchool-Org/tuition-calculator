import styled from 'styled-components';

export const Section = styled.section<{ inverse?: boolean }>`
  padding: 2em 0;
  background-color: ${props => props.inverse ? props.theme.primary : 'white'};
  color: ${props => props.inverse ? 'white' : props.theme.text}
`;
