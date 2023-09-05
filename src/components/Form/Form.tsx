import Switch from 'shared/Switch/Switch';
import './Form.css';
import { useContext, useState } from 'react';
import { ThemeContext } from 'app/theme/ThemeContext';
import { Button } from 'shared/Button/Button';
import { UserContext } from 'app/UserContext';
import { Select } from 'shared/Select/Select';
import { Input } from 'shared/Input/Input';
import { Checkbox } from 'shared/Checkbox/Checkbox';
import { ChangeFunction } from 'types/base';
import { User } from 'types/user';
import { nanoid } from 'nanoid';

const options = [
	{ name: 'Other', value: 'other' },
	{ name: 'Not Subscribed', value: 'notSubscribed' },
	{ name: 'Subscribed', value: 'subscribed' },
];

export const Form = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { selected, setSelected, users, setUser } = useContext(UserContext);

	const [form, setForm] = useState<User>({
		id: '',
		name: '',
		age: 18,
		subscription: 'other',
		employment: false,
	});

	const handleInputs: ChangeFunction = (name, value) => {
		setForm({ ...form, [name]: value });
	};
	const toggleTheme = () => {
		if (theme === 'dark') setTheme('light');
		if (theme === 'light') setTheme('dark');
	};
	const handleDelete = () => {
		if (selected) {
			const filtered = users.filter((user) => {
				if (user.id !== selected.id) return user;
			});

			setUser(filtered);
			setSelected(null);
		}
	};
	const handleInsert = () => {
		setForm({ ...form, id: nanoid() });
		setUser([...users, form]);
		setForm({ ...form, name: '' });
	};
	return (
		<fieldset className='form-wrapper'>
			<legend>Insert Row</legend>
			<div className='form-top'>
				<Input
					value={form.name}
					type='text'
					onChange={handleInputs}
					name='name'
					placeholder='Name'
				/>
				<Input
					value={form.age}
					type='number'
					onChange={handleInputs}
					name='age'
					placeholder='Age'
				/>
				<Select options={options} setValue={handleInputs} name='subscription' />
				<Checkbox label='Employment' name='employment' onChange={handleInputs} />
				<Button onClick={handleInsert} disabled={form.name === ''}>
					Insert
				</Button>
			</div>
			<div className='line'></div>
			<div className='form-bottom'>
				<Switch
					label='Mode'
					onClick={toggleTheme}
					defaultChecked={theme === 'dark'}
				/>
				<Button onClick={handleDelete} disabled={selected === null}>
					Delete
				</Button>
			</div>
		</fieldset>
	);
};
