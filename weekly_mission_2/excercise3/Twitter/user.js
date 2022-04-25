class Usuario {
  constructor(user,username,bio,age,password){
    this.user = user
    this.username = username
    this.bio = bio
    this.age = age
    this.password = password
  }  
  
  getUserInfo(){
   return `Usuario: ${this.user}, Username: ${this.username}`
 }
 
 getPersonalInfo(){
   return `Bio: ${this.bio}, Edad: ${this.age}`
 }
 
}

const jorgito = new Usuario("Jorge Luis","jluis_marq","Es un joven alegre",23,"Noteladoy")

console.log(jorgito)
console.log(jorgito.getUserInfo())
console.log(jorgito.getPersonalInfo())
