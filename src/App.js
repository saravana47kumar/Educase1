import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('welcome');

  const handleLogin = () => setScreen('account');
  const handleRegister = () => setScreen('register');
  const handleAccountCreated = () => setScreen('account');

  return (
    <div className="container">
      {screen === 'welcome' && (
        <Welcome
          onCreateAccountClick={() => setScreen('register')}
          onLoginClick={() => setScreen('login')}
        />
      )}
      {screen === 'login' && (
        <Login onRegisterClick={() => setScreen('register')} onLoginSuccess={handleLogin} />
      )}
      {screen === 'register' && (
        <Register onLoginClick={() => setScreen('login')} onRegisterSuccess={handleAccountCreated} />
      )}
      {screen === 'account' && <Account />}
    </div>
  );
};

export default App;
