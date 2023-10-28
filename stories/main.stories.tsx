import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main',
	component: Main,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

function Main(): JSX.Element {
	return <div></div>;
}
export const Normal: Story = {
	args: {},
};
