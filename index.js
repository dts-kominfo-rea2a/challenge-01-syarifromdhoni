// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let favoriteRestaurantMonica = new Set();
favoriteRestaurantMonica.add("Bento");
favoriteRestaurantMonica.add("Sushi");
favoriteRestaurantMonica.add("Pancake");
favoriteRestaurantMonica.add("Eggy");
favoriteRestaurantMonica.add("Tempura");
favoriteRestaurantMonica.add("Bento");
favoriteRestaurantMonica.add("Eggy");
favoriteRestaurantMonica.add("Padang");
favoriteRestaurantMonica.add("Ttok");
favoriteRestaurantMonica.add("Sushi");
favoriteRestaurantMonica.add("Sushi");

let favoriteColorMonica = new Set();
favoriteColorMonica.add("Yellow");
favoriteColorMonica.add("Pink");
favoriteColorMonica.add("White");
favoriteColorMonica.add("Purple");

const eduMonica1 = {
  name: "SD 01",
  city: "Jakarta",
  graduate: 2016,
};
const eduMonica2 = {
  name: "SMP 02",
  city: "Jakarta",
  graduate: 2019,
};
const eduMonica3 = {
  name: "SMA 03",
  city: "Tanggerang",
};

const educationMonica = [];
educationMonica.push(eduMonica1);
educationMonica.push(eduMonica2);
educationMonica.push(eduMonica3);

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: favoriteColorMonica,
  isHavePet: "yes",
  education: educationMonica,
  favoriteRestaurant: favoriteRestaurantMonica,
};

let favoriteRestaurantWendy = new Set();
favoriteRestaurantWendy.add("Tempura");
favoriteRestaurantWendy.add("Bento");
favoriteRestaurantWendy.add("Sushi");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Padang");
favoriteRestaurantWendy.add("Katsu");
favoriteRestaurantWendy.add("Geprek");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Eggy");

let favoriteColorWendy = new Set();
favoriteColorWendy.add("Blue");
favoriteColorWendy.add("Black");
favoriteColorWendy.add("Grey");

const eduWendy1 = {
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
};
const eduWendy2 = {
  name: "SMP 03",
  city: "bogor",
  graduate: 2013,
};
const eduWendy3 = {
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
};
const eduWendy4 = {
  name: "Universitas Maju",
  city: "Tangerang",
};
const educationWendy = [];
educationWendy.push(eduWendy1);
educationWendy.push(eduWendy2);
educationWendy.push(eduWendy3);
educationWendy.push(eduWendy4);

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 17,
  email: "wendy@dingdong.com",
  favoriteColor: favoriteColorWendy,
  isHavePet: "no",
  education: eduWendy1,
  eduWendy2,
  favoriteRestaurant: favoriteRestaurantWendy,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
