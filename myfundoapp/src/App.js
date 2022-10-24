import logo from './logo.svg';
import './App.css';
import Signin from './pagesfundo/signIn/signin';
import Signup from './pagesfundo/signUp/signup';
import TextField from "@mui/material/TextField";
import Header from './componentsfundo/header/header';
import Takenoteone from './componentsfundo/takenoteone/takenoteone';
// import Takenotetwo from './components/takenotetwo/takenotetwo';
import Dashboard from './pagesfundo/Dashboard/Dashboard';
import Router from './componentsfundo/router/router';
import store from './componentsfundo/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
        <Provider store = {store} >

        <Router />
         
        </Provider>

        
    </div>

  );
}


export default App;