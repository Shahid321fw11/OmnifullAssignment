import "./App.css";
import Hub from "./components/HubPage/Hub";
import LeftBar from "./components/LeftBar/LeftBar";
import Navbar from "./components/Navbar/Navbar";
import Sales from "./components/SalesPage/Sales";
import Setting from "./components/Setting/Setting";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <LeftBar />
      <Setting />
      <Routes>
        <Route path="/sales" exact element={<Sales />}></Route>
        <Route path="/hub" element={<Hub />}></Route>
      </Routes>
    </>
  );
}

export default App;
