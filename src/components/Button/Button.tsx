import React from 'react';

import { Buttont } from '@/components/Buttonte/Button';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <Buttont label='click' />
      <button>{props.label}</button>
    </>
  );
};

export default Button;
