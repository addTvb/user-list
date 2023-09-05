import { UserListProvider } from 'app/UserListProvider';
import { ThemeProvider } from 'app/theme/ThemeProvider';
import { Main } from 'components/Main/Main';

function App() {
	return (
		<UserListProvider>
			<ThemeProvider>
					<Main />
			</ThemeProvider>
		</UserListProvider>
	);
}

export default App;
