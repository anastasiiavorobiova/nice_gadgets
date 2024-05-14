// Modified identity-obj-proxy.

// This works around the fact we use ES named exports for styles, e.g.:
// import * as styles from './styles.scss'.
// https://github.com/keyanzhang/identity-obj-proxy/issues/8

module.exports = new Proxy(
	{},
	{
		get: function getter(_target, key) {
			if (key === '__esModule') {
				// True instead of false to pretend we're an ES module.
				return true;
			}
			return key;
		},
	}
);
