import React from 'react';

import { OutlineButton } from '../styled/OutlineButton';

type Props = {
  text: string;
  selected: boolean;
  disabled: boolean;
  inverse?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

export const ToggleButton: React.FC<Props> = ({ text, selected, disabled, inverse, onClick }) => (
  <OutlineButton onClick={onClick} selected={selected} disabled={disabled} inverse={inverse}>{text}</OutlineButton>
);
