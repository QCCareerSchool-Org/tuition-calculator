import styled from 'styled-components';

type Props = {
  selected?: boolean;
  disabled?: boolean;
  inverse?: boolean;
  autoWidth?: boolean;
}

const backgroundColor = (color: string, selected: boolean, inverse: boolean): string => {
  if (inverse) {
    return selected ? 'white' : color;
  } else {
    return selected ? color : 'white';
  }
};

const borderColor = (color: string, inverse: boolean): string => {
  return inverse ? 'white' : color;
};

const color = (color: string, selected: boolean, inverse: boolean): string => {
  if (inverse) {
    return selected ? color : 'white';
  } else {
    return selected ? 'white' : color;
  }
};

export const OutlineButton = styled.button<Props>`
  width: ${props => props.autoWidth ? 'auto' : '100%'};
  border: 1px solid ${props => borderColor(props.theme.primary, !!props.inverse)};
  background-color: ${props => backgroundColor(props.theme.primary, !!props.selected, !!props.inverse)};
  color: ${props => color(props.theme.primary, !!props.selected, !!props.inverse)};
  opacity: ${props => props.disabled ? 0.5 : 1};
  padding: 12px 16px;
  margin: 0 0 4px;
  border-radius: 4px;
  &:focus { outline: none; }
`;
