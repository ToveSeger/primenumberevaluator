import React from 'react'
import { Bubble } from '../../components/bubble/Bubble'
import {Menu} from '../../components/menu/Menu'
import "./Home.css"



export const Home = () => {
    
    return (
        <div className="flex">
            <div className="bubble">{Bubble("Prime Number Evaluator")}</div>
            <div className="menu"><Menu/></div>
        </div>
    )
}
