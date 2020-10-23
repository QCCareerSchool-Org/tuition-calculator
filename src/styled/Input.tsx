import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  color: ${props => props.theme.text};
  &:focus { outline: none; box-shadow: 0 0 4px ${props => props.theme.primary} };
  text-align: center;
`;
