import { Route, Routes } from "react-router-dom";
import "./App.css";

import Impressum from "./pages/Impressum/Impressum";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Webcams from "./pages/Webcams/Webcams";

const App = () => {
  return (
    <div>
      <Header />
      <div class="max-width-1100">
        <div class="bordered-box">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route exact path="impressum" element={<Impressum />}></Route>
            <Route exact path="webcams" element={<Webcams />}></Route>
            {/* <Route exact path="kontakt" element={<Kontakt />}></Route> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
