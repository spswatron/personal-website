import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Content() {
    return(
        <div>
            <h1>Personas</h1>
        </div>
    )
}

function Personas() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default Personas;
