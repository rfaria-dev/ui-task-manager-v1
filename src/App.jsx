import { Tasks } from './components/Tasks/Tasks';
import { SideBar } from './components/SideBar/SideBar';
import './App.scss';

function App() {
	return (
		<div className="app-container">
			<SideBar />
			<Tasks />
		</div>
	);
}

export default App;
