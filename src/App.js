import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Sidemenu from './components/Sidemenu';

function App() {

   return (
    <div>
      <div className="wrapper">
      <Sidemenu></Sidemenu>
      <div id="content">
        <Header></Header>
        <MainBody></MainBody>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
