import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Impressum from "./pages/Impressum/Impressum";

export default function App() {
  return (
    <div>
      <p>Moin</p>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="impressum" element={<Impressum />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
