import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Sidemenu from './components/Sidemenu';

function App() {

  const [filterText, setFilterText] = useState("");

  const handleTextChange = text => {
    setFilterText(text);
  }

  return (
    <div>
      <Header handleTextChange={handleTextChange} filterText={filterText}></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar-div">

            <Sidemenu></Sidemenu>
          </div>
          <div className="col-md-10">

            <MainBody filterText={filterText}></MainBody>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
