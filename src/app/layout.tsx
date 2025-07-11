import React from "react";
import Navigation from "../components/Navigation.tsx";
import Footer from "../components/Footer.tsx";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default App;
