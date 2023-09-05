import { useEffect, RefObject, MouseEvent } from 'react';

export const useClickOutside = (ref: RefObject<Element>, callback: () => void) => {
	const handleClick = ({ target }: MouseEvent) => {
		if (!ref.current?.contains(target as Node)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};
