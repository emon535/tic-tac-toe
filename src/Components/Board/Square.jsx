
export default function Square({value, onClick}) {
    

    return (
        <button className=' m-1 w-16 h-16 border-2 border-black' onClick={(value)=>onClick(value)}>
            {value}
        </button>
    )

    
}
