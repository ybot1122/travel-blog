import React from "react";
import Navigation from "../components/Navigation.tsx";
import Footer from "../components/Footer.tsx";
import Page from "./page.tsx";

const App = () => {
  return (
    <main>
      <Navigation />
      <Page />
      <Footer />
    </main>
  );
};

export default App;
