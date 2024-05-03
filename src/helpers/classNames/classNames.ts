import always from '../always/always';

export function classNames(
	cls: string = '',
	mods: Record<string, boolean | string> = always.EMPTY_OBJ,
	additional: string[] = []
): string {
	return [
		cls.trim(),
		Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className.trim()),
		additional
			.map((className) => className.trim())
			.join(' ')
			.trim(),
	]
		.join(' ')
		.trim();
}
