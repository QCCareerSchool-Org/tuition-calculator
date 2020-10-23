import styled from 'styled-components';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type Props = {
  align: Alignment;
}

export const Align = styled.div<Props>`
  text-align: ${props => props.align};
`;
