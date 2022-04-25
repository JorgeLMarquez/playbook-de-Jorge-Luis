class Biography {
  constructor(name,birthday,instagram,twitter,relationshipStatus,numberOfFriends){
    this.name = name
    this.birthday = birthday
    this.instagram = instagram
    this.twitter = twitter
    this.relationshipStatus = relationshipStatus
    this.numberOfFriends = numberOfFriends
  }  
   
   getGeneralInfo(){
   	 return `Name: ${this.name}, Birthday: ${this.birthday}
   		Instagram ID: ${this.instagram}, Twitter ID: ${this.twitter}`
   }
}

const jorgito = new Biography("Jorge Luis","10/10/10","jluis_marq","jluis_marq","single",200)
console.log(jorgito)
console.log(jorgito.getGeneralInfo());
