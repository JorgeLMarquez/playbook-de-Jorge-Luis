class Hashtag {
  constructor(name,author,numberOfUses){
    this.name = name
    this.author= author
    this.numberOfUses = numberOfUses
  }  
  
 getGeneralInfo(){
   return `Name: ${this.name}, Uses: ${this.numberOfUses}`
 }

}

const mundial = new Hashtag("#Nos Vamos al mundial","Jorge Luis", 40000)
console.log(mundial)
console.log(mundial.getGeneralInfo());
