import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./layouts/Sections/Sections";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
    </>
  );
}

export default App;
