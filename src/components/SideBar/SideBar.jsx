import { CustomButton } from '../CustomButton/CustomButton';
import logo from '../../assets/navLogo.png';
import './SideBar.scss';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
	const navigate = useNavigate();
	const handleSignOut = () => navigate('/login');

	return (
		<div className="sidebar-container">
			<div className="logo">
				<img src={logo} alt="Full Stack Club" />
			</div>
			<div className="sign-out">
				<CustomButton onClick={handleSignOut}>Sair</CustomButton>
			</div>
		</div>
	);
};

export { SideBar };
