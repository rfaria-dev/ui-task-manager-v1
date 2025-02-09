import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-2.png';
import { CustomButton } from '../../components/CustomButton';
import './Login.scss';

const Login = () => {
	const navigate = useNavigate();

	const handleSignInClick = () => {
		navigate('/');
	};

	return (
		<div className="login-container">
			<img src={logo} alt="Full Stack Club" />
			<CustomButton onClick={handleSignInClick}>Sign in</CustomButton>
		</div>
	);
};

export { Login };
