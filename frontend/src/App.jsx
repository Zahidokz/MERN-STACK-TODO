import React from "react";
import Navbar from "./components/Navbar";
import InputForm from "./components/inputform/InputForm";
import { Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/read" element={<Read />} />
        <Route path ="/update/:id" element={<Update/>}/>
      </Routes>
    </>
  );
};

export default App;
