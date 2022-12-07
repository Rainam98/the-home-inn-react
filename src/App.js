import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Sidemenu from './components/Sidemenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import BecomeHost from './components/BecomeHost';
// import AddProperty from './components/AddProperty';

function App() {

  const user = localStorage.getItem("user");

  return (
    <Router>
      {/* <div>
      <div className="wrapper">
      <Sidemenu></Sidemenu>
      <div id="content">
        <Header></Header>
        <MainBody></MainBody>
      </div>
      </div>

      <Footer></Footer>
    </div> */}
      {/* <Login></Login> */}
      <Routes>
        
        <Route exact path='/' element={< BecomeHost />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/signup' element={< SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
