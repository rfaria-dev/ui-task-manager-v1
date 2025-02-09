import logo from '../../assets/logo-2.png';
import { CustomButton } from '../../components/CustomButton';
import './Login.scss';

const Login = () => {
	return (
		<div className="login-container">
			<img src={logo} alt="Full Stack Club" />
			<CustomButton>Sign in</CustomButton>
		</div>
	);
};

export { Login };
