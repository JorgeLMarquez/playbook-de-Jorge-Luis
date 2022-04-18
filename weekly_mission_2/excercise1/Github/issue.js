const issue = {
 title: "Ayuda",
 repositoryNameAssociated: "IssueRepo",
 status: "Active",
 labels: "Good",
 author: "JorgeLMarquez",
 dateCreated: "10/4/22",
 lastUpdated: "10/5/22",
 getTitleAndAuthor: function(){
   return `Title: ${this.title}, Author: ${this.autor}`
 },
 getGeneralInfo: function(){
   return `This repository is associated to ${this.repositoryNameAssociated}`
 }
}

console.log("Nombre del issue:" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
