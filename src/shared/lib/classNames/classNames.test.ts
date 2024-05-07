import { classNames } from './classNames';

describe('classNames', () => {
	test('With class string added', () => {
		const cls = 'cls1';

		expect(classNames(cls)).toBe(cls);
	});

	test('With mods added', () => {
		const mods = {
			mod1: true,
			mod2: true,
		};

		expect(classNames('', mods)).toBe('mod1 mod2');
	});

	test('With additional classes array added', () => {
		const arr = ['val1', 'val2'];

		expect(classNames('', {}, arr)).toBe(arr.join(' '));
	});

	test('With mods filtered', () => {
		const mods = {
			mod1: true,
			mod2: false,
			mod3: true,
		};

		expect(classNames('', mods)).toBe('mod1 mod3');
	});

	test('Trim extra spaces', () => {
		const addedClass = '   cls1    cls2   ';
		const mods = {
			'  cls3  ': true,
		};
		const arr = ['   cls4 ', ' cls5   '];

		expect(classNames(addedClass, mods, arr)).toBe('cls1 cls2 cls3 cls4 cls5');
	});

	test('Return empty string', () => {
		expect(
			classNames(
				'',
				{
					mod1: false,
				},
				[]
			)
		).toBe('');
	});
});
