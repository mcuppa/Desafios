import React from "react";

import "./App.css";
import "./components/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
     <ItemListContainer titulo="producto1" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto2" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto3" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
      </div>
      <div className="container">
     <ItemListContainer titulo="producto1" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto2" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto3" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
      </div>
      <div className="container">
     <ItemListContainer titulo="producto1" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto2" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
     <ItemListContainer titulo="producto3" descripcion="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ultricies est, ut bibendum leo efficitur vitae. Duis dignissim vitae sapien iaculis lobortis." />
      </div>
    </div>
  );
}

export default App;
