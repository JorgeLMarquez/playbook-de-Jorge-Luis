class Trending {
  constructor(title,author,numberOfRetweets,numberOfLikes,numberOfComments){
    this.title = title
    this.author = author
    this.numberOfRetweets = numberOfRetweets
    this.numberOfLikes = numberOfLikes
    this.numberOfComments = numberOfComments
  }  

getTitleandAuthor(){
   return  `Nombre del trendingTopic: ${this.title}, Author: ${this.author}`
 }
 
 getPopularity() {
	   return `Retweets: ${this.numberOfRetweets}, Likes: ${this.numberOfLikes}, Comments: ${this.numberOfComments}`
 }
 
}

const mundial = new Trending("Mexico en el mundial","Elon Musk",500000, 250000,299)
console.log(mundial)
console.log(mundial.getTitleandAuthor())
console.log(mundial.getPopularity())

