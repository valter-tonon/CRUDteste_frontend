import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store'
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from './Styled/Global';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu/>
        <GlobalStyles/>
        <ToastContainer autoClose='5000'/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
