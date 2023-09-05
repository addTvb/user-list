import { ReactNode,  useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from 'types/base';

interface ThemeProviderProps {
	children: ReactNode;
}
export const ThemeProvider = (props: ThemeProviderProps) => {
	const { children } = props;
	const [theme, setTheme] = useState<Theme>('dark');

	return (
		<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
