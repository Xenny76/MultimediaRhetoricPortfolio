import ScrollSpy from "../components/ScrollSpy";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <>
      <ScrollSpy/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </>
  );
}