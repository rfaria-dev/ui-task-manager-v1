import { SideBar } from '../../components/SideBar/SideBar';
import { Tasks } from '../../components/Tasks/Tasks';
import './Home.scss';

const Home = () => {
	return (
		<div className="home-container">
			<SideBar />
			<Tasks />
		</div>
	);
};

export { Home };
