import React from 'react';

import { ButtonItem } from '@/components/Button/styled';

export interface IButton {
  label: string;
}

export const Button = (props: IButton) => {
  return <ButtonItem type='button'>{props.label}</ButtonItem>;
};
