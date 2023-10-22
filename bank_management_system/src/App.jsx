import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import AccountManagement from './pages/AccountCreate';
import TransactionManagement from './pages/TransactionManagement';
import UpdateAccount from './pages/UpdateAccount';
import AccountInfo from './pages/AccountInfo';
import ITAdminView from './pages/ITAdminView';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="AccountManagement" element={<AccountManagement />} />
        <Route path="TransactionManagement" element={<TransactionManagement />} />
        <Route path="UpdateAccount" element={<UpdateAccount />} />
        <Route path="AccountInfo" element={<AccountInfo />} />
        <Route path="AdminView" element={<ITAdminView />} />
      
    </Routes>
  );
}

export default App;
