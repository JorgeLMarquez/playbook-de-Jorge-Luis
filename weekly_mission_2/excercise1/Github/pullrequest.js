const pullRequest = {

 title: "Ayuda",
 author: "Jorge Luis",
 branchName: "No lo se",
 dateCreated: "10/4/22",
 status: "Active",
 repositoryNameAssociated: "Playbook",

 getStatus: function(){
   return `Status: ${this.status}`
 },

 getTitleAndAuthor: function(){
   return `Title: ${this.title}, Author: ${this.author}`
 }
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor())
