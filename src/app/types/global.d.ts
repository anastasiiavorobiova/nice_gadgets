declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const content: string;

	export { ReactComponent };
	export default content;
}

declare const __IS_DEV__: boolean;
