console.log('hello world')

// data diri
var name = 'jhon'
let age = 20
const address = 'jakarta'
let gender = "male"
let isSingle = true // false
let hobbies = ['coding', 'gaming', 'travel']
let friends = {
  name: 'jane',
  age: 21,
  address: 'bandung'
}

// var name = "jane"
age = 21

console.log(name)
console.log(age)
console.log(address)

console.log(name + ',' + age + ',' + address)
console.log(`${name}, ${age}, ${address}`)

// conditional
// if else || switch
if (gender === 'male') {
  console.log('dia laki laki')
} else {
  console.log('dia perempuan')
}

let lampu = 'merah'
let adaKendaraanDiDepan = true

if (lampu == "hijau" && !adaKendaraanDiDepan) {
  console.log("jalan")
  if (isSingle) {
    console.log("jalan alone")
  } else {
    console.log("jalan dengan teman")
  }
} else if (lampu == "kuning") {
  console.log("hati-hati")
} else if (lampu == "merah") {
  console.log("berhenti")
} else {
  console.log("lampu rusak")
}

switch (lampu) {
  case "hijau":
    console.log("jalan")
    break;
  case "kuning":
    console.log("hati-hati")
    break;
  case "merah":
    console.log("berhenti")
    break;
  default:
    console.log("lampu rusak")
    break;
}

// loop
// for (counted) || while || do while
// for (start; stop; step)

for (let i = 10; i >= 0; i--) {
  // console.log(i)
  if (i % 2 == 0) {
    console.log(i)
  }
}

for (let i = 1; i <=5; i++) {
  let text = ""
  for (let j = 1; j <= i; j++) {
    text = text + i
  }
  console.log(text)
}

let i = 1
while (i <= 5) {
  console.log(i)
  i++
}

// let darahMasihMengalir = true
// while (darahMasihMengalir) {
//   console.log("selama itu pula kau jadi milikku")
// }

// do {
//   console.log("selama itu pula kau jadi milikku")
// } while (darahMasihMengalir)

// captcha
// do {
//   // munculin popup
// } while (isSalahMilih)


let angka = [123,53,22,67,32]

console.log(angka[0])
console.log(angka[1])
console.log(angka[2])
console.log(angka[3])
console.log(angka[4])

console.log(angka.length)

for (let i = 0; i < angka.length; i++) {
  console.log(angka[i])
}

let a = 1

console.log(++a)