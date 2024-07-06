// src/App.jsx
import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Correct import statement
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Login-Based Data Fetching App</h1>
        <LoginForm />
        <ProductList />
      </div>
    </AuthProvider>
  );
};

export default App;
