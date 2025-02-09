import logo from '../../assets/logo-2.png';
import { CustomButton } from '../../components/CustomButton';
import './Login.scss';

const Login = () => {
	return (
		<div className="login-container">
			<img src={logo} alt="Full Stack Club" />
			<CustomButton>Signin</CustomButton>
		</div>
	);
};

export { Login };
