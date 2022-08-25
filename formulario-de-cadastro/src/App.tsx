import AuthProvider from './contexts/AuthContext';
import RoutesMain from './routes/routes';
import Global from './style/global';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <AuthProvider>
            <Global />
            <RoutesMain />
            <ToastContainer autoClose={1000}/>
        </AuthProvider>
    );
}

export default App;
