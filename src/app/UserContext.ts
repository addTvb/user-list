import { createContext, Dispatch, SetStateAction } from 'react';
import jsonData from 'data/data.json';
import { User } from 'types/user';

const loadData = JSON.parse(JSON.stringify(jsonData));

interface IUserContext {
	user: User[];
	setUser: Dispatch<SetStateAction<User[]>>;
	loading: boolean;
}

export const UserContext = createContext<IUserContext>({
	user: loadData,
	setUser: () => {},
	loading: true,
});
