// ambil dulu
let title = document.getElementById('title')

title.addEventListener('click', () => {
    //  lalu manipulasi
    title.innerHTML = "haiiiii </br> <span>auzan</span>"
    title.classList.add("text")
})


// counter
let btnDecrement = document.getElementById("btn-decrement")
let btnIncrement = document.getElementById("btn-increment")
let count = document.getElementById('count')
let countNumber = 0

btnDecrement.addEventListener("click", () => {
    countNumber--
    updateCount()
})

btnIncrement.addEventListener("click", () => {
    countNumber++
    updateCount()
})

function updateCount() {
    count.innerText = countNumber
}



