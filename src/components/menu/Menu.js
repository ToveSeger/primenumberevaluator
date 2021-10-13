import {useState, useEffect} from 'react'
import "./Menu.css"

import {nextPrimeNumber, primeNumberCheck} from "../../primeEvaluator/PrimeEvaluator"

export const Menu = () => {
const [number, setNumber]= useState()
const [clickedReset, setClickedReset]=useState(false);

const reset=()=>{
    setClickedReset(true);
    setNumber(null);
}

const valueDeterminator=()=>{
    if(number==null){
        var test = clickedReset?"Enter number":number;
    }
    else test=number;
    return(test)   
}

    return (
        <div className="container">
            <div className="containerInner">
            <h2>Enter a number to check if it's a prime number</h2>
            <div className="flex">
            <input placeholder="Enter number" type="number" onChange={(event) => setNumber(event.target.value)}value={valueDeterminator()} />        
            <h5>{primeNumberCheck(number)}</h5>           
            <button onClick={reset} className="btn btn-dark">Reset number</button>
            {nextPrimeNumber(number)}
            </div>
            </div>
        </div>
    )
}


