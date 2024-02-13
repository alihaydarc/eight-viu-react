import { useEffect, useState } from "react"
import Friendss from "./Friends";


export default function Users(){
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return(
        <div>
            <h3>Users: {users.length}</h3>
            {
                friend.map(friend => <Friend></Friend>)
            }
        </div>
    )
}