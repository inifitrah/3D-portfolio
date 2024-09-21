import { Hero } from "./section/Hero";
import { Navbar } from "./section/Navbar";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
