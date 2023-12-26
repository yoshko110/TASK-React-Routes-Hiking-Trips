import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
