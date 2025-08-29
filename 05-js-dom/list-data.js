let listData = document.getElementById("list-data")
let hewan = ["kelinci", "kambing", "kucing", "domba"]

for (let i = 0; i < hewan.length; i++) {
    listData.innerHTML += `
        <div class="card">
            ${hewan[i]}
        </div>
    `
}


// listData.innerHTML = "hellloooo"