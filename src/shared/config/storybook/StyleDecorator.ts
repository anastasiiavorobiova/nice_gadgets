import type { Decorator } from '@storybook/react';
import '@/app/styles/index.scss';

export const StyleDecorator = (Story: any) => {
	return Story();
};
