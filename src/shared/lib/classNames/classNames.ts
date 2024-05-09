import always from '@/shared/lib/always/always';

export function classNames(
	cls: string = '',
	mods: Record<string, boolean | string> = always.EMPTY_OBJ,
	additional: string[] = []
): string {
	return [
		cls.split(' ').filter(Boolean).join(' '),
		Object.entries(mods)
			.filter(([_key, value]) => Boolean(value))
			.map(([className]) => className.trim())
			.join(' '),
		additional
			.filter(Boolean)
			.map((className) => className.trim())
			.join(' ')
			.trim(),
	]
		.filter(Boolean)
		.join(' ')
		.trim();
}
