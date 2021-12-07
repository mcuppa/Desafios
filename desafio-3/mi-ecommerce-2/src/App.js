import React from "react";
//Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
 import Item from "./components/Item/Item";
import Footer from "./components/Footer/Footer";
import { Routes, Route} from "react-router-dom";



//Views
import Home from '../src/views/Home/Home';
import Sale from '../src/views/Sale/Sale';
import Contact from '../src/views/Contact/Contact';
import ItemDetail from '../src/views/ItemDetail/ItemDetail'

//Estilos
import "./App.css";
import "./components/bootstrap.min.css";



function App() {
  return (
    <div>
      
      <NavBar />
      {/*<div>
            <ItemListContainer />
      </div> */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item" element={<ItemDetail />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

