import React from 'react'
import "./Bubble.css"
import "../../shared/global/style.css"

export const Bubble = (text) => {
    return (
        <div className="bubbleShape">
            <h1>{text}</h1>
        </div>
    )
}
