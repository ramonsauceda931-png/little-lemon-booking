import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";

function App() {
    return (
        <BrowserRouter>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/booking">Booking</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;