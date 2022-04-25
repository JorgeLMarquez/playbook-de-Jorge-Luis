class Issue {
  constructor(title,repositoryNameAssociated,status,labels,author,dateCreated,lastUpdated){
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.labels = labels
    this.author = author
    this.dateCreated = dateCreated
    this.lastUpdated = lastUpdated
  }  

   getTitleAndAuthor(){
   	return `Title: ${this.title}, Author: ${this.autor}`
   }
    
   getGeneralInfo(){
   	return `This repository is associated to ${this.repositoryNameAssociated}`
   }
   
  
}

const problema = new Issue("Ayuda","IssueRepo","Active","Good","JorgeLMarquez","10/4/22","10/5/22")


console.log(problema)
console.log("Nombre del issue:" + problema.title)
console.log(problema.getTitleAndAuthor())
console.log(problema.getGeneralInfo())

