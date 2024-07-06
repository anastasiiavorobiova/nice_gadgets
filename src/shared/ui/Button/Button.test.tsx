import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import * as cls from './Button.module.scss';

describe('Button', () => {
	test('In the document', () => {
		render(<Button>TEST</Button>);

		expect(screen.getByTestId('button')).toBeInTheDocument();
	});

	test('Have primary theme', () => {
		render(
			<Button theme={ThemeButton.PRIMARY} className={cls[ThemeButton.PRIMARY]}>
				TEST
			</Button>
		);
		expect(screen.getByTestId('button')).toHaveClass(cls[ThemeButton.PRIMARY]);
	});

	test('Have secondary theme', () => {
		render(<Button theme={ThemeButton.SECONDARY}>TEST</Button>);
		expect(screen.getByTestId('button')).toHaveClass('secondary');
	});

	test('Have neutral theme', () => {
		render(<Button theme={ThemeButton.NEUTRAL}>TEST</Button>);
		expect(screen.getByTestId('button')).toHaveClass('neutral');
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
