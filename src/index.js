import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';

const App = () => {
  const hostname = window.location.hostname;
  const devOverride = new URLSearchParams(window.location.search).get('mode');

  let Component;
  if (devOverride === 'auth' || hostname.startsWith('auth')) {
    Component = Auth;
  } else if (devOverride === 'app' || hostname.startsWith('app')) {
    Component = Dashboard;
  } else {
    Component = Landing;
  }

  return <Component />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
