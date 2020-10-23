import styled from 'styled-components';

import { TuitionTheme } from '../hooks/useTuitionTheme';

type Size = keyof TuitionTheme['size'];

type Props = {
  size: Size | number;
}

export const Size = styled.span<Props>`
  font-size: ${props => typeof props.size === 'number' ? `${props.size}px` : props.theme.size[props.size]}
`;
