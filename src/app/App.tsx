import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppSelector } from "./hooks";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../features/hero";
import { About } from "../features/about";
import { Skills } from "../features/skills";
import { Experience } from "../features/experience";
import { Projects } from "../features/projects";
import { Contact } from "../features/contact";

const AppContent = () => {
  const themeMode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
