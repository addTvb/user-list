import { UserContext } from 'app/UserContext';
import { useContext, useRef } from 'react';
import { TableRow } from 'components/TableRow/TableRow';
import { User } from 'types/user';
import { useClickOutside } from 'hooks/useClickOutside';

import './Table.css';

export const Table = () => {
	const { users, setSelected } = useContext(UserContext);

	const handleSelect = (user: User) => setSelected(user);
	const resetSelect = () => setSelected(null);

	const tableRef = useRef(null);
	useClickOutside(tableRef, resetSelect);

	return (
		<div className='table-wrapper' ref={tableRef}>
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Subscription</th>
						<th>Employment</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<TableRow
							user={user}
							key={`user-row-${user.id}`}
							onSelect={handleSelect}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
