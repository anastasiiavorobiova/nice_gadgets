import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from '@/shared/ui/Logo/Logo';

describe('Logo', () => {
	test('In the document', () => {
		render(
			<MemoryRouter>
				<svg>
					<Logo />
				</svg>
			</MemoryRouter>
		);

		expect(screen.getByTestId('logo')).toBeInTheDocument();
	});
});
