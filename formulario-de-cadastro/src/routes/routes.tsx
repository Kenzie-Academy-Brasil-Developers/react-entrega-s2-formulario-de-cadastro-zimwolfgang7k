import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import { AnimatePresence } from 'framer-motion';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

const RoutesMain = () => {
    return (

            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

    );
};

export default RoutesMain;
