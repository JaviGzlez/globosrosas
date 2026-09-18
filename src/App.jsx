import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
      <CookieBanner />
    </>
  );
}
