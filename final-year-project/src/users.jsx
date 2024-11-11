import { useState,useRef,useEffect } from "react";
import axios from "axios";

const Users = () => {
    const [users,setUsers] = useState();
    let isMounted = true;
        const controller = new AbortController();






    return(<>
    <article>
        <h2>User List</h2>
        {users?.length && 
        (<> 
        <ul>
            {users.map((user,i)=>{
                <li key={i}>{user?.username}</li>
            })}
        </ul>
         
         </>)}

    </article>
    </>)
}
export default Users;
