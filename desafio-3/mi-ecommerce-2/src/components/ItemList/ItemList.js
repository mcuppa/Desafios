import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setItems(json))
    }, []);



    return (
        <div>
            <h1>Lista de usuarios</h1>
           {items.map((item) => {
               return <Item data={item} />;
           })}
           </div>
    );       
};

export default ItemList
