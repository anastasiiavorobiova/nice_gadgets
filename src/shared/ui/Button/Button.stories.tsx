import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		theme: ThemeButton.PRIMARY,
		children: 'Click me!',
	},
};

export const Secondary: Story = {
	args: {
		theme: ThemeButton.SECONDARY,
		children: 'Click me!',
	},
};

export const Neutral: Story = {
	args: {
		theme: ThemeButton.NEUTRAL,
		children: 'Click me!',
	},
};

export const Unstyled: Story = {
	args: {
		theme: ThemeButton.UNSTYLED,
		children: 'Click me!',
	},
};

export const PrimaryDark: Story = {
	args: {
		theme: ThemeButton.PRIMARY,
		children: 'Click me!',
	},
};

export const SecondaryDark: Story = {
	args: {
		theme: ThemeButton.SECONDARY,
		children: 'Click me!',
	},
};

export const NeutralDark: Story = {
	args: {
		theme: ThemeButton.NEUTRAL,
		children: 'Click me!',
	},
};

export const UnstyledDark: Story = {
	args: {
		theme: ThemeButton.UNSTYLED,
		children: 'Click me!',
	},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
NeutralDark.decorators = [ThemeDecorator(Theme.DARK)];
UnstyledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBlue: Story = {
	args: {
		theme: ThemeButton.PRIMARY,
		children: 'Click me!',
	},
};

export const SecondaryBlue: Story = {
	args: {
		theme: ThemeButton.SECONDARY,
		children: 'Click me!',
	},
};

export const NeutralBlue: Story = {
	args: {
		theme: ThemeButton.NEUTRAL,
		children: 'Click me!',
	},
};

export const UnstyledBlue: Story = {
	args: {
		theme: ThemeButton.UNSTYLED,
		children: 'Click me!',
	},
};

PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];
SecondaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];
NeutralBlue.decorators = [ThemeDecorator(Theme.BLUE)];
UnstyledBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const PrimaryOrange: Story = {
	args: {
		theme: ThemeButton.PRIMARY,
		children: 'Click me!',
	},
};

export const SecondaryOrange: Story = {
	args: {
		theme: ThemeButton.SECONDARY,
		children: 'Click me!',
	},
};

export const NeutralOrange: Story = {
	args: {
		theme: ThemeButton.NEUTRAL,
		children: 'Click me!',
	},
};

export const UnstyledOrange: Story = {
	args: {
		theme: ThemeButton.UNSTYLED,
		children: 'Click me!',
	},
};

PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
SecondaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
NeutralOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
UnstyledOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const PrimaryPurple: Story = {
	args: {
		theme: ThemeButton.PRIMARY,
		children: 'Click me!',
	},
};

export const SecondaryPurple: Story = {
	args: {
		theme: ThemeButton.SECONDARY,
		children: 'Click me!',
	},
};

export const NeutralPurple: Story = {
	args: {
		theme: ThemeButton.NEUTRAL,
		children: 'Click me!',
	},
};

export const UnstyledPurple: Story = {
	args: {
		theme: ThemeButton.UNSTYLED,
		children: 'Click me!',
	},
};

PrimaryPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
SecondaryPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
NeutralPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
UnstyledPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
