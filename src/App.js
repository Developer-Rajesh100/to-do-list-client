import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Calender from "./Pages/Calender/Calender";
import Navebar from "./Pages/Shared/Navebar";

function App() {
    return (
        <div>
            <Navebar></Navebar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/calendar" element={<Calender></Calender>}></Route>
            </Routes>
        </div>
    );
}

export default App;
