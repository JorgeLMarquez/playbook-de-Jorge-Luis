const trendingTopic = {
 title: "Mexico en el mundial",
 author: "Elon Musk",
 numberOfRetweets: 500000,
 numberOfLikes: 250000,
 numberOfComments: 299,
 getTitleandAuthor: function(){
   return  `Nombre del trendingTopic: ${this.title}, Author: ${this.author}`
 },
 getPopularity: function () {
   return `Retweets: ${this.numberOfRetweets}, Likes: ${this.numberOfLikes}, Comments: ${this.numberOfComments}`
 }
}
console.log(trendingTopic.getTitleandAuthor())
console.log(trendingTopic.getPopularity())
