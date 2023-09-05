import { Table } from 'components/Table/Table';
import { Form } from 'components/Form/Form';
import './Main.css';
import { useContext } from 'react';
import { ThemeContext } from 'app/theme/ThemeContext';

export const Main = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='wrapper' data-theme={theme}>
			<main className='main'>
				<Form />
				<Table />
			</main>
		</div>
	);
};
