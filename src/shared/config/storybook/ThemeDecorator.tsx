import React from 'react';
import { Theme } from '../../../app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
	return (
		<div className={`app wrapper ${theme}`}>
			<Story />
		</div>
	);
};
