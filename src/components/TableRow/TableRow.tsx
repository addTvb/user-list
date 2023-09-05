import { useContext } from 'react';
import { getEmploymentText } from 'utils/getEmploymentText';
import { User } from 'types/user';
import { getSubscriptionText } from 'utils/getSubscriptionText';
import { UserContext } from 'app/UserContext';
import clsx from 'clsx';
import './TableRow.css';

interface ITableRow {
	user: User;
	onSelect: (user: User) => void;
}

export const TableRow = (props: ITableRow) => {
	const { user, onSelect } = props;
	const { selected } = useContext(UserContext);

	const handleSelect = () => onSelect(user);
	const selectCondition = selected?.id === user.id;

	return (
		<tr
			className={clsx('table-row', selectCondition && 'selected')}
			onClick={handleSelect}
		>
			<td className='table-cell'>{user.name}</td>
			<td className='table-cell'>{user.age}</td>
			<td className='table-cell'>{getSubscriptionText(user.subscription)}</td>
			<td className='table-cell'>{getEmploymentText(user.employment)}</td>
		</tr>
	);
};
