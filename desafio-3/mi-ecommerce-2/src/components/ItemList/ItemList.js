import React, {useEffect, useState} from 'react'

const ItemList = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setItem(json))
    }, []);



    return (
        <div>
            <h1>Lista de usuarios</h1>
            {item.map(item => {
                return (
                    <div className="card" Style="width: 18rem;">
                    <img className="card-img-top" src=".../100px180/" alt="Card"/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.email}</p>
                      <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                )
             })}
        </div>
    )
}

export default ItemList
