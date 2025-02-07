import { Tasks } from './components/Tasks/Tasks';
import './App.scss';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<>
			<Tasks />
			<ToastContainer />
		</>
	);
}

export default App;
