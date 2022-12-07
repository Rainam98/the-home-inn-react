import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import BecomeHost from './components/BecomeHost';
import AddProperty from './components/AddProperty';
import RateProperty from './components/RateProperty';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/signup' element={< SignUp />}></Route>
        <Route exact path='/rateproperty' element={< RateProperty />}></Route>
        <Route exact path='/addproperty' element={< AddProperty />}></Route>
        <Route exact path='/host' element={< BecomeHost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
