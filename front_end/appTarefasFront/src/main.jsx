import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import NavBar from "./components/pages/NavBar"

import './index.css'
import RegisterTarefas from "./components/RegisterTaferas/Taferas";
import Tarefas from "./components/Tarefas/Tarefas"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Tarefas />} />
      <Route path="/tarefas" element={<RegisterTarefas />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/Registrar" element={<Register />}/>
    </Routes>
  </Router>
)
