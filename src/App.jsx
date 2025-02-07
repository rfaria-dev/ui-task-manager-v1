import { Tasks } from './components/Tasks/Tasks';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Tasks />
            <ToastContainer />
        </>
    );
}

export default App;
