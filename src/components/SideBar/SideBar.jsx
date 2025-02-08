import { CustomButton } from '../CustomButton/CustomButton';
import logo from '../../assets/navLogo.png';
import './SideBar.scss';

const SideBar = () => {
	return (
		<div className="sidebar-container">
			<div className="logo">
				<img src={logo} alt="Full Stack Club" />
			</div>
			<div className="sign-out">
				<CustomButton>Sair</CustomButton>
			</div>
		</div>
	);
};

export { SideBar };
