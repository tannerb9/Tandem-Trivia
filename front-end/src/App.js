import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppViews from "./components/AppViews";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <AppViews />
    </>
  );
}

export default App;
