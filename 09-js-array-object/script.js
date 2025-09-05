let hewan = ["kucing", "jangkrik", "kambing", "tikus", "sapi", "lebah"];

// hewan.forEach(function () {})
hewan.forEach((item, i) => {
  console.log(i, item);
});

let listHewan = hewan.map((item, i) => {
  return `<li>${item}</li>`;
});
console.log(listHewan);

let hewanKapital = hewan.map((item, i) => {
  return item[0].toUpperCase() + item.slice(1, item.length);
});
console.log(hewanKapital);

let angka = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// butuh data sebanyak data yg sekarang
// tanpa merubah datanya

let angkaKali100 = angka.map((item, i) => {
  return item * 100;
});
console.log(angkaKali100);

let kelipatan3 = angka.filter((item) => {
  return item % 3 === 0;
});
console.log(kelipatan3);

let primeNumber = angka.filter((item) => {
  if (item === 2 || item === 3 || item == 5 || item == 7) {
    return item;
  }

  if (item % 2 == 0) {
    return;
  }

  if (item % 3 == 0) {
    return;
  }

  if (item % 5 == 0) {
    return;
  }

  if (item % 7 == 0) {
    return;
  }
  
  return item;
});
console.log(primeNumber);

// kombinasi array object
// []
// [[1,2], [2,3]]
// [{}, {}]

let kucing = {
    name: 'tom',
    life: 9,
    foods: ["ikan", "daging", "susu"],
    friends: [
        {name: "jerry", jenis: "tikus"},
        {name: "bulldog", jenis: "anjing"},
        {name: "kucing item", jenis: "kucing"},
    ],
    suara: () => {}
}
console.log(kucing.name)
console.log(kucing.foods[0])
console.log(kucing.friends[2].name)

let kelas = [
    {id: 1, nama: "html", harga: 0},
    {id: 2, nama: "css", harga: 0},
    {id: 3, nama: "JS", harga: 0},
    {id: 4, nama: "react", harga: 0},
]



