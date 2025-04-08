import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {AddAndEdit} from "./components/AddAndEdit";
import {Detail} from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>}></Route>
            <Route path="/add" element={<AddAndEdit/>}></Route>
            <Route path="/edit" element={<AddAndEdit/>}></Route>
            <Route path="/detail" element={<Detail/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
