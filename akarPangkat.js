const prompt = require('prompt-sync')({sigint: true});
const x = parseInt(prompt("Masukkan bilangan genap:"));

if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 !== 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  const hasil = Math.sqrt(x);
  console.log(`Akar pangkat 2 dari ${x} adalah ${hasil}`);
}