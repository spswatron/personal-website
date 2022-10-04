import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NewHome from "../components/newHome";

function Index() {
  return (
    <>
      <Navbar />
      <NewHome />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
