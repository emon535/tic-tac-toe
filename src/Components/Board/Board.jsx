import  Square  from "./Square"
import { useState } from 'react'

export const  Board = () =>{

    const [squars, setSquars] = useState(Array(9).fill(null))

    function handleClick(i){
        console.log(i, "Clicked")
        const nextSquars = squars.slice()
        nextSquars[i] = 'X'
        setSquars(nextSquars)
    }

    return (
        <>
        <h2>Game Board</h2>
        <div className="flex">
            <Square value={squars[0]} onClick={()=>handleClick(0)}/>
            <Square value={squars[1]} onClick={()=>handleClick(1)} />
            <Square value={squars[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className="flex">
        <Square value={squars[3]} onClick={()=>handleClick(3)}/>
            <Square value={squars[4]} onClick={()=>handleClick(4)}/>
            <Square value={squars[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className="flex">
        <Square value={squars[6]} onClick={()=>handleClick(6)} />
            <Square value={squars[7]}  onClick={()=>handleClick(7)}/>
            <Square value={squars[8]}  onClick={()=>handleClick(8)}/>
        </div>
        </>
    )
}
