import { LOCAL_STORAGE_THEME_KEY } from '../../theme/ThemeContext';

const _ls = (key: string) => {
	return {
		get: () => {
			const value = localStorage.getItem(key);

			try {
				return value ? JSON.parse(value) : value;
			} catch (e) {
				return value;
			}
		},
		set: <T>(value: T) => {
			const _value = value ? JSON.stringify(value) : String(value);

			localStorage.setItem(key, _value);
			window.dispatchEvent(
				new StorageEvent('storage', {
					newValue: _value,
					key,
				})
			);
		},
		remove: () => {
			localStorage.removeItem(key);
			window.dispatchEvent(new StorageEvent('storage', { key }));
		},
		listen: <D = any>(
			callback: (value: D | null | string) => void
		): (() => void) => {
			const listener = (event: StorageEvent) => {
				if (event.key === key || event.key === null) {
					try {
						const value = event.newValue
							? JSON.parse(event.newValue)
							: event.newValue;
						callback(value);
					} catch (e) {
						callback(event.newValue || null);
					}
				}
			};

			window.addEventListener('storage', listener);

			return () => window.removeEventListener('storage', listener);
		},
	};
};

export const themeStorage = _ls(LOCAL_STORAGE_THEME_KEY);
