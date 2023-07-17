import React from 'react';

export interface IButton {
  label: string;
}

export const Button = (props: IButton) => {
  return <button type='button'>{props.label}</button>;
};
