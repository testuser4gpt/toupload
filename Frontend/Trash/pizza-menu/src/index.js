import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome To TeraPizza .Co</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <div>
        <h2>Our Menu for Today !</h2>
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Pizza Margherita</h2>
      <p>Ingredients : Tomato and mozarella</p>
      <img src="pizzas/margherita.jpg" alt="margherita Pizza" />
    </div>
  );
}

function Footer() {
  const current_hour = new Date().getHours();
  const isOpen = current_hour >= 9 && current_hour < 23;

  return (
    <footer className="footer">
      <p>
        {new Date().toLocaleTimeString()}{" "}
        {isOpen
          ? "Welcome to TeraPizza, We are open !"
          : "Sorry we are Closed now"}
      </p>
    </footer>
  );
  //return React.createElement("footer", null, "We are open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
