import { Tasks } from './components/Tasks/Tasks';
import { SideBar } from './components/SideBar/SideBar';
import './App.scss';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className="app-container">
			<SideBar />
			<Tasks />
			<ToastContainer />
		</div>
	);
}

export default App;
