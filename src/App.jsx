import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms"
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Navigation from "./layouts/navigation";
import Footer from "./layouts/Footer";


function App() {
    return (
        <>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
        </>
    );
}

export default App;
