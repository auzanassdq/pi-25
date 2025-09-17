import { useState } from "react"

export default function LoginV2 () {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault()
        console.log(userLogin)
    }

    return (
        <form>
            <input placeholder="username" name="username" value={userLogin.username} onChange={handleChange}/>
            <input placeholder="password" name="password" value={userLogin.password} onChange={handleChange} />
            <button onClick={login}>login</button>
        </form>
    )
}