import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

describe('Button', () => {
	test('In the document', () => {
		render(<Button>TEST</Button>);

		expect(screen.getByTestId('button')).toBeInTheDocument();
	});

	test('Have primary theme', () => {
		render(<Button theme={ThemeButton.PRIMARY}>TEST</Button>);

		expect(screen.getByTestId('button')).toHaveClass('primary');
	});

	test('Have unstyled theme', () => {
		render(<Button theme={ThemeButton.UNSTYLED}>TEST</Button>);

		expect(screen.getByTestId('button')).toHaveClass('unstyled');
	});

	test('Additional class could be added', () => {
		render(<Button className="test">TEST</Button>);

		expect(screen.getByTestId('button')).toHaveClass('test');
	});
});
