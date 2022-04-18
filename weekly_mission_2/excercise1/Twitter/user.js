const user = {
 user: "Jorge Luis",
 username: "jluis_marq",
 bio: "Es joven alegre",
 age: 23,
 password: "NoTeladoy",
 getUserInfo: function(){
   return `Usuario: ${this.user}, Username: ${this.username}`
 },
 getPersonalInfo: function(){
   return `Bio: ${this.bio}, Edad: ${this.age}`
 }
}

console.log(user.getUserInfo())
console.log(user.getPersonalInfo())
