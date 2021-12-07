import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
         fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setItems(json))
        }, 2000 )
    }, []);



    return (
        <div className="container">
            <h1 className="title">Productos Destacados</h1>
            <div className="itemContainer">
           {items.map((item) => {
               return <Item data={item} />;
           })}</div>
           </div>
    );       
};

export default ItemList
