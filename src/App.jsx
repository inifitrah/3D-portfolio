import TailwindSizeIndicator from "./components/TailwindSizeIndicator";
import About from "./section/About";
import { Hero } from "./section/Hero";
import { Navbar } from "./section/Navbar";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      {import.meta.env.MODE === "development" && <TailwindSizeIndicator />}
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
