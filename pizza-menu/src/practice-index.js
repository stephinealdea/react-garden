//import React from "react";
//import ReactDOM from "react-dom/client";
//import "./index.css";

const PUBLIC_URL_IMG = process.env.PUBLIC_URL || '';

const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: `${PUBLIC_URL_IMG}/images/focaccia.jpg`,
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: `${PUBLIC_URL_IMG}/images/margherita.jpg`,
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: `${PUBLIC_URL_IMG}/images/spinaci.jpg`,
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: `${PUBLIC_URL_IMG}/images/funghi.jpg`,
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: `${PUBLIC_URL_IMG}/images/salamino.jpg`,
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: `${PUBLIC_URL_IMG}/images/prosciutto.jpg`,
    soldOut: false,
  },
];

function App() {
  return  (
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
      <h1>Hell React!</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.id}/>
        ))}
      </ul>
      ): 
      <p>We're still working on our menu</p>
      }
    </main>
  );
}

function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <p>We're open until {closeHour}:00. Come visit us or oder online</p>
      ):
      <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      }
    </footer>
  );
}
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/