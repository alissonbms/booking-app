import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Properties from "./pages/propertyList/PropertyList";
import Property from "./pages/property/Property";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertyList" element={<Properties />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
