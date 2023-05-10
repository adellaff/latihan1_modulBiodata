var profile = require('./modules/profile')

var name = "Adella Fitriany";
var birth = "Bandung";
var dob = "28 December 1997";
var address = "Bandung"

console.log(`Nama : ${profile.name(name)} `);
console.log(`Tempat Lahir : ${profile.birthday(birth)} `);
console.log(`Tanggal Lahir : ${profile.dateofbirth(dob)} `);
console.log(`Alamat : ${profile.addressProfile(address)} `);
// console.log("Nama : " +profile.name(name));
// console.log("Tempat Lahir : " +profile.birthday(birth));
// console.log("Tanggal Lahir: " +profile.dateofbirth(dob));
// console.log("Alamat : " +profile.addressProfile(address));