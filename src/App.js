import React from 'react';
import './App.css';
import Header from "./header";
import Sidebar from "./sidebar"



function App() {
  return (
    <div className="app">
     {/*<h1></h1>*/}
     {/*header*/}
<Header />

<div className='app__body'>
  <Sidebar></Sidebar>
     {/*app body*/}
     {/*sidebar*/}
     {/*feed*/}
     {/*widgets*/}

     </div>
    </div>
  );
}

export default App;
