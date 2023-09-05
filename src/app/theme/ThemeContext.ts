import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from 'types/base';

interface IThemeContext {
	theme: 'dark' | 'light';
	setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({
	theme: 'dark',
	setTheme: () => {}
});
