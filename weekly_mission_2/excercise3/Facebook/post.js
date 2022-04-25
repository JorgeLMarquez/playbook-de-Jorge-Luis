class Post {
  constructor(title,author,numberOfLikes,numberOfComments){
    this.title = title
    this.author = author
    this.numberOfLikes = numberOfLikes
    this.numberOfComments = numberOfComments
  }  

 getTitleandAuthor(){
   return  `Nombre del post: ${this.title}, Author: ${this.author}`
 }
 
 getPopularity() {
   return `Likes: ${this.numberOfLikes}, Comments: ${this.numberOfComments}`
 }
}

const help = new Post("Feliz Navidad","Jorge Luis",2,2)
console.log(help)
console.log(help.getTitleandAuthor())
console.log(help.getPopularity())

