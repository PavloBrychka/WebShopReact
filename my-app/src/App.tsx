import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/containers/default/DefaultLayout';
import CategoryListPage from './components/category/list/CategoryListPage';
import CategoryCreatePage from './components/category/create/CategoryCreatePage';
import LoginPage from './components/auth/login/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<CategoryListPage/>} /> 
          <Route path="Categories/create" element={<CategoryCreatePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;