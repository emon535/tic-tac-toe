import  Square  from "./Square"
import { useState } from 'react'

export const  Board = () =>{

    const [squars, setSquars] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function calculateWinner(squars){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]

        for(let i = 0; i < lines.length; i++){
            const [a,b,c] = lines[i]
            if(squars[a] && squars[a] === squars[b] && squars[a] === squars[c]){
                return squars[a]
            }
        }
        return null
    }

    function handleClick(i){
        const winner = calculateWinner(squars)

        if(winner){
            alert(`Winner is ${winner}`)
        }

        if(squars[i] || winner){
            return;
        }

        const nextSquars = squars.slice()
        
        if(xIsNext){
            nextSquars[i] = 'X'
        }
        else{
            nextSquars[i] = 'O'
        }

        setSquars(nextSquars)
        setXIsNext(!xIsNext)


    }

    return (
        <>
        <h2>Next Playr {status}</h2>
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
