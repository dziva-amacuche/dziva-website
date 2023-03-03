import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Consultoria from "./pages/Consultoria.js"; 
import Rede from "./pages/Rede.js"
import Web from "./pages/Web.js";
import CCTV from "./pages/CCTV.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="consultoria" element={<Consultoria />} />
          <Route path="rede" element={<Rede />} />
          <Route path="web" element={<Web />} />
          <Route path="cctv" element={<CCTV />} />


        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
