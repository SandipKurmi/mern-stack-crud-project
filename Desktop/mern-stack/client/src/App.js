import "./App.css";
import NavBar from "./components/NavBar";
import Sandip from "./components/Sandip";
import AllUsers from "./components/AllUser";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sandip />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
