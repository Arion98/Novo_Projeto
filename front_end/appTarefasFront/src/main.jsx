import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import NavBar from "./components/pages/NavBar"

import './index.css'
import Tarefas from "./components/Taferas/Tarefas";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Tarefas />} />
    </Routes>
  </Router>
)
