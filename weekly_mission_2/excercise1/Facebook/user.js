const user = {
 user: "Jorge Luis",
 email: "jorgito@example.com",
 phoneNumber: 1234567652,
 age: 23,
 relationshipStatus:"single",
 password: "Noteladirejijiji",
 
 getUserInfo: function(){
   return `Usuario: ${this.user}, Edad: ${this.age}`
 },
 getPersonalInfo: function(){
   return `Relationship Status: ${this.relationshipStatus}, email: ${this.email}`
 }
}

console.log(user.getUserInfo())
console.log(user.getPersonalInfo())
