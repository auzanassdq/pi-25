let inputUsername = document.getElementById("username")
let inputPassword = document.getElementById("password")
let loginBtn = document.getElementById("login")

// loginBtn.addEventListener('click', login)

// loginBtn.click = login

function testClick () {
    console.log("tesss")
}

function login() {
    // event.preventDefault()

    let userLogin = {
        username: inputUsername.value,
        password: inputPassword.value
    }

    console.log(userLogin)
}

