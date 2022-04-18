const hashtag = {
 name: "#Nos Vamos al mundial",
 author: "Jorge Luis",
 numberOfUses: 40000,

 getGeneralInfo: function(){
   return `Name: ${this.name}, Uses: ${this.numberOfUses}`
 }
}

console.log(hashtag.getGeneralInfo());
