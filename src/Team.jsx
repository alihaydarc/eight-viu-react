import { useState } from "react"

export default function Team() {
    const [count, newCount] = useState(0);

    const handelAdd = () => {
        const newAdding = count + 1;
        newCount(newAdding);
    }
    const handelRemove = () => {
        const newRemove = count -1;
        newCount(newRemove); 
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRedious: '12px' 
    }

    return(
        <div style={teamStyle}>
            <h2>Counter: {count}</h2>
            <button onClick={handelAdd}>adding</button>
            <button onClick={handelRemove}>remove</button>
        </div>
    )
}