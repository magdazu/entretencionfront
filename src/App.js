import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminPage from "./page/AdminPage";
 

const App =() => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage/>}></Route>
          <Route path="FormData" element={<AdminPage/>}></Route>
          <Route path="TablaContenido" element={<AdminPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
};

export default App;
