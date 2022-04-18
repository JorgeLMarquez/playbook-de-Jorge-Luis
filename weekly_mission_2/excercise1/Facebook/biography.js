const biography = {
 name: "Jorge Luis",
 birthday: "10/10/10",
 instagram: "jluis_marq",
 twitter:"jluis_marq",
 relationshipStatus: "single",
 numberOfFriends: 200,

 getGeneralInfo: function(){
   return `Name: ${this.name}, Birthday: ${this.birthday}
   Instagram ID: ${this.instagram}, Twitter ID: ${this.twitter}`
 }
}

console.log(biography.getGeneralInfo());
