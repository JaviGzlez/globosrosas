import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Bodas from "./pages/Bodas.jsx";
import Bautizos from "./pages/Bautizos.jsx";
import Comuniones from "./pages/Comuniones.jsx";
import Eventos from "./pages/Eventos.jsx";
import Galeria from "./pages/Galeria.jsx";
import SobreNosotras from "./pages/SobreNosotras.jsx";
import Contacto from "./pages/Contacto.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="bodas" element={<Bodas />} />
          <Route path="bautizos" element={<Bautizos />} />
          <Route path="comuniones" element={<Comuniones />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="sobre-nosotras" element={<SobreNosotras />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
