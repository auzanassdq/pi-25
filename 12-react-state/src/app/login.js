import { useState } from "react"

export default function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = (event) => {
        event.preventDefault()

        console.log(username)
        console.log(password)
    }

    return (
        <form>
            <input placeholder="username" value={username} onChange={changeUsername}/>
            <input placeholder="password" value={password} onChange={changePassword} />
            <button onClick={login}>login</button>
        </form>
    )
}