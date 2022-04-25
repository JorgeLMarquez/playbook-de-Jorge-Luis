class Driver {
  constructor(profile,email,phoneNumber,age,rating,password){
    this.profile = profile
    this.email = email
    this.phoneNumber = phoneNumber
    this.age = age
    this.rating = rating
    this.password = password
  }  
  
 getprofileInfo(){
   return `Usuario: ${this.profile}, Edad: ${this.age}`
 }
 
 getPersonalInfo(){
   return `Rating: ${this.rating}, email: ${this.email}`
 }
 
}

const jorgito = new Driver("Jorge Luis","jorgito@example.com",1234567652,23,5.5, "Noteladirejijiji")

console.log(jorgito)
console.log(jorgito.getprofileInfo())
console.log(jorgito.getPersonalInfo())
