import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConsultoriaDeTI from "./pages/ConsultoriaDeTI.js"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="consultoria" element={<ConsultoriaDeTI />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
