let inputUsername = document.getElementById("username")
let inputPassword = document.getElementById("password")
let loginBtn = document.getElementById("login")

// loginBtn.addEventListener('click', login)

loginBtn.onclick = login

function testClick () {
    console.log("tesss")
}

function login(event) {
    event.preventDefault()

    let userLogin = {
        username: inputUsername.value,
        password: inputPassword.value
    }

    console.log(userLogin)
}

