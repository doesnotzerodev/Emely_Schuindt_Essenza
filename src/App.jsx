import { useState, createContext, useContext } from "react";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Sobre from "./components/Sobre.jsx";
import Protocolo from "./components/Protocolo.jsx";
import ComoFunciona from "./components/ComoFunciona.jsx";
import Resultados from "./components/Resultados.jsx";
import Videos from "./components/Videos.jsx";
import Educacional from "./components/Educacional.jsx";
import Depoimentos from "./components/Depoimentos.jsx";
import InstagramFeed from "./components/InstagramFeed.jsx";
import Faq from "./components/Faq.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import FormOverlay from "./components/FormOverlay.jsx";

export const FormContext = createContext();

export function useFormOverlay() {
  return useContext(FormContext);
}

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <FormContext.Provider value={{ formOpen, openForm: () => setFormOpen(true), closeForm: () => setFormOpen(false) }}>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <TrustBar />
        <Sobre />
        <Protocolo />
        <ComoFunciona />
        <Resultados />
        <Educacional />
        <Videos />
        <Depoimentos />
        <Faq />
        <InstagramFeed />
        <Contato />
        <Footer />
        <FloatingButtons />
        <FormOverlay />
      </div>
    </FormContext.Provider>
  );
}
