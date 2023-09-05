import './Button.css';
interface ButtonProps {
	children: string;
	onClick: () => void;
	disabled?: boolean;
}
export const Button = (props: ButtonProps) => {
	const { children, onClick, disabled } = props;
	return (
		<button className='button' disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
};
