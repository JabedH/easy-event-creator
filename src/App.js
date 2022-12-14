import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Event from "./components/Event/Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
