const profile = {
 profile: "Jorge Luis",
 email: "jorgito@example.com",
 phoneNumber: 1234567652,
 age: 23,
 rating:5.5,
 password: "Noteladirejijiji",

 getprofileInfo: function(){
   return `Usuario: ${this.profile}, Edad: ${this.age}`
 },
 getPersonalInfo: function(){
   return `Rating: ${this.rating}, email: ${this.email}`
 }
}

console.log(profile.getprofileInfo())
console.log(profile.getPersonalInfo())
