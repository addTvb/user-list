import { createContext, Dispatch, SetStateAction } from 'react';
import jsonData from 'data/data.json';
import { User } from 'types/user';

const loadData = JSON.parse(JSON.stringify(jsonData));

interface IUserContext {
	users: User[];
	setUser: (users: User[]) => void;
	loading: boolean;
	selected: User | null;
	setSelected: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<IUserContext>({
	users: loadData,
	setUser: () => {},
	loading: true,
	selected: null,
	setSelected: () => {},
});
