import styled from 'styled-components';

type WhiteSpace = 'nowrap' | 'normal' | 'pre';

type Props = {
  whiteSpace: WhiteSpace;
}

export const WhiteSpace = styled.div<Props>`
  white-space: ${props => props.whiteSpace};
`;
