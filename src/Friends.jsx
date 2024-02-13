import { useEffect, useState } from "react"
import Friendd from "./Friend";
import Friend from "./Friend";

export default function Friendss() {

    const [friends, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend></Friend>)
            }
        </div>
    )
}