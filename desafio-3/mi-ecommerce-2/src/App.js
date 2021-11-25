import React from "react";

import "./App.css";
import "./components/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
// import Item from "./components/Item/Item";



function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
            <ItemList />
      </div>
    </div>
  );
}

export default App;
