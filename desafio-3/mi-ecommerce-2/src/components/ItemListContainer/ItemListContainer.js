import React from "react";

const ItemListContainer = (props) => {
    return (
        <div>
        <div className="card" Style="width: 18rem;">
        <img className="card-img-top" src=".../100px180/" alt="Card"/>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
      </div>
    )
};

export default ItemListContainer;

