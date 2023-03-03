import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Consultoria from "./pages/Consultoria.js"; 
import Rede from "./pages/Rede.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="consultoria" element={<Consultoria />} />
          <Route path="rede" element={<Rede />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
