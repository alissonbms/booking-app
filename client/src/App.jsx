import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Properties from "./pages/propertyList/PropertyList";
import Property from "./pages/property/Property";
import "./App.css";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";
import PaymentConfirmation from "./pages/paymentConfirmation/paymentConfirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertyList" element={<Properties />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
