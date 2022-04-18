const post = {
 title: "Feliz Navidad",
 author: "Jorge Luis",
 numberOfLikes: 2,
 numberOfComments: 2,

 getTitleandAuthor: function(){
   return  `Nombre del post: ${this.title}, Author: ${this.author}`
 },
 getPopularity: function () {
   return `Likes: ${this.numberOfLikes}, Comments: ${this.numberOfComments}`
 }
}
console.log(post.getTitleandAuthor())
console.log(post.getPopularity())
