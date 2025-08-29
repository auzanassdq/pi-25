// // function
function sayHello(name = "markoding") {
    console.log("Hello, World! " + name);
    // 100 baris
}

sayHello("auzan");
sayHello();
sayHello();
sayHello();

let angka = 2

function luasLingkaran(r) {
    const phi = 3.14
    const luas = phi*r**2
    return luas
}

console.log("r 2 = " +  luasLingkaran(2))
console.log("r 5 = " +  luasLingkaran(5))


// menjumlahkan bil genap dari a -> b
// a = 4, b = 10 | 4 6 8 10 => 28
let jumlah = 0
for (let i = 4; i <= 10; i++) {
    // console.log(i)
    if (i % 2 === 0) {
        console.log(i)
        jumlah = jumlah + i
    }
}
console.log(jumlah)

// proses ke-2
// 10 12 14 16 18 20
let jumlah2 = 0
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
        jumlah2 = jumlah2 + i
    }
}
console.log(jumlah2)

// proses ke-2
// 1 - 1000
let jumlah3 = 0
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        jumlah3 = jumlah3 + i
    }
}
console.log(jumlah3)



// dalam bentuk function
function menjumlahkanBilGenap (start, stop) {
    let jumlah = 0
    for (let i = start; i <= stop; i++) {
        if (i % 2 === 0) {
            jumlah = jumlah + i
        }
    }
    // console.log(jumlah)
    return jumlah
}

console.log("123 - 345 -> " , menjumlahkanBilGenap(123, 345))
console.log("50 - 70 -> " , menjumlahkanBilGenap(50, 70))
console.log("25 - 30 -> " , menjumlahkanBilGenap(25, 30))

// // clasic functoin
// function luasPersegi (p, l){
//     return p * l
// }

// // variable function
// let luasPersegi = function (p, l) {
//     return p*l
// }

// // arrow function
// let luasPersegi = (p, l) => {
//     return p*l
// }
// let luasPersegi = () => p*l


// object
let kucing = {
    warna: "oren",
    makanan: "ikan",
    lari: () => {
        console.log("kucing berlari")
    },
    suara: () => {
        console.log("miaaw")
    }
}