import React from "react"; 
import './counter.css';

const Contador = () => {
  
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