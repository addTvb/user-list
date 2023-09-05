import { UserContext } from "app/UserContext";
import { useContext } from "react";

export const Table = () => {
    const {user} = useContext(UserContext)
    console.log(user);
    
    return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Subscription</th>
						<th>Employment</th>
					</tr>
				</thead>
				<tbody>{}</tbody>
			</table>
		</div>
	);
};
