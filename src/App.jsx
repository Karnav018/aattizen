import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TopNav from "./components/TopNav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageTransition from "./components/animation/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Clients from "./pages/Clients.jsx";
import Support from "./pages/Support.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <ScrollToTop />
      <TopNav />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageTransition>
                  <ServiceDetail />
                </PageTransition>
              }
            />
            <Route
              path="/clients"
              element={
                <PageTransition>
                  <Clients />
                </PageTransition>
              }
            />
            <Route
              path="/support"
              element={
                <PageTransition>
                  <Support />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
