import React from "react"; 
import './counter.css';

const Contador = () => {
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(counter - 1);
    }   
    if (counter === 0) {
        return (
            <div>
                <h3>Cantidad</h3>
                <button onClick={handleClick}>+</button>

            </div>
        )
    }

    return (
        <div>
            <h3>Cantidad: {counter}</h3>
            <button onClick={handleReset}>-</button>
            <button onClick={handleClick}>+</button>
            <p>Hora: {hora}</p>

        </div>
    );
}

export default Contador;