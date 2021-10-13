import React from 'react'
import { Bubble } from '../../components/bubble/Bubble'
import {Menu} from '../../components/menu/Menu'
import { nextPrimeNumber } from '../../primeEvaluator/PrimeEvaluator'



export const Home = () => {
    
    return (
        <div>
            {Bubble("Prime Number Evaluator")}
            <Menu/>
        </div>
    )
}
