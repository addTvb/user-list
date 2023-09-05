import { ReactNode,  useEffect, useState } from 'react';
import jsonData from 'data/data.json';
import { getLocalStorage } from 'utils/getLocalStorage';
import { User } from 'types/user';
import { UserContext } from './UserContext';

const loadData = JSON.parse(JSON.stringify(jsonData));

interface UserListProviderProps {
	children: ReactNode;
}
export const UserListProvider = (props: UserListProviderProps) => {
	const { children } = props;
	const [userData, setUserData] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const userList = getLocalStorage('user-list-addTvb') as User[];
		if (userList && userList.length !== 0 && typeof userList !== 'string')
			setUserData(userList);
		else setUserData(loadData);

		setLoading(false)
	}, []);


	return (
		<UserContext.Provider value={{ user: userData, setUser: setUserData, loading: loading }}>
			{children}
		</UserContext.Provider>
	);
};
