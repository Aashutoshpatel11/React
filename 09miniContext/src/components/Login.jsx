import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleOnClick = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return(
        <div>
            <h4>Please Login</h4>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleOnClick} >Login</button>
        </div>
    )
}

export default Login;