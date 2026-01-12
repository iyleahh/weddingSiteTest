import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Plane,
  MailQuestion,
} from "lucide-react";
import { theme } from "./config";
import { SiteBackground } from "./components/Background";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { BlankPage } from "./pages/BlankPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className={`min-h-screen ${theme.bg} ${theme.ink} antialiased`}>
        <SiteBackground />
        <Header />

        <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/travel" 
            element={<BlankPage title="Travel Information" icon={<Plane className="h-5 w-5" />} />} 
          />
          <Route 
            path="/rsvp" 
            element={<BlankPage title="RSVP" icon={<MailQuestion className="h-5 w-5" />} />} 
          />
          <Route 
            path="/save-the-date" 
            element={<BlankPage title="Save The Date" icon={<CalendarDays className="h-5 w-5" />} />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
