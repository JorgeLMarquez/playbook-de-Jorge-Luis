class Usuario {
  constructor(user,email,phoneNumber,age,relationshipStatus,password){
    this.user = user
    this.email = email
    this.phoneNumber = phoneNumber
    this.age = age
    this.relationshipStatus = relationshipStatus
    this.password = password
  }  
 
 getUserInfo(){
   return `Usuario: ${this.user}, Edad: ${this.age}`
 }
 
 getPersonalInfo(){
   return `Relationship Status: ${this.relationshipStatus}, email: ${this.email}`
 }
}

const jorgito = new Usuario("Jorge Luis","jorgito@example.com",1234567652,23,"single","Noteladirejijiji")

console.log(jorgito)

console.log(jorgito.getUserInfo())
console.log(jorgito.getPersonalInfo())
