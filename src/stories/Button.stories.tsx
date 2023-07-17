import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button, IButton } from '@/components/Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: IButton) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};
