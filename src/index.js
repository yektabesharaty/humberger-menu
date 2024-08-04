import React from "react";
import ReactDom from "react-dom/client";
import "D:/burger-menu/src/index.css";

const BuegerData = [
  {
    name: "Turkey burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "16$",
    photoName: "بوقلمون.jpg",
    soldOut: false,
  },
  {
    name: "Cheese burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "10$",
    photoName: "بخارپز.jpg",
    soldOut: false,
  },
  {
    name: "Chili burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "18$",
    photoName: "chilli-1.jpg",
    soldOut: false,
  },
  {
    name: "Rice burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "13$",
    photoName: "rice.jpg",
    soldOut: false,
  },
  {
    name: "Mushroom burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "16$",
    photoName: "file.jpg",
    soldOut: false,
  },
  {
    name: "Chicken burger",
    ingredients: "ground turkey and 1 large egg,cheese",
    price: "12$",
    photoName: "file (1).jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <BurgerList />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h1>Fast React Burger Co</h1>
    </div>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>our menue</h2>
      <p>
        Authentic American food. 6 creative dishes to choose from. All from our
        stone oven, all organic, all delicious
      </p>
    </div>
  );
}
function BurgerList() {
  const Burgers = BuegerData;
  return (
    <ul className="pizzas">
      {Burgers.map((pizza) => (
        // <Pizza name={pizza.name} photoname={pizza.photoName} />
        <Burger pizzaobj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}
function Burger({ pizzaobj }) {
  return (
    <div>
      <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaobj.photoName} />
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </li>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="order">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div>
      <div className="order">
        <p>
          We are open from {openHour}:00 until {closeHour}:00 Comp visit us or
          order online
        </p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
