class pullRequest {
  constructor(title,author,branchName,dateCreated,status,repositoryNameAssociated){
    this.title = title
    this.author = author
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
  }  

   getStatus(){
   	return `Status: ${this.status}`
   }
    
   getTitleAndAuthor(){
   	return `Title: ${this.title}, Author: ${this.author}`
   }
  
}

const ayuda = new pullRequest("Ayuda","Jorge Luis","No lo se","10/4/22", "Active","Playbook")
console.log(ayuda)
console.log(ayuda.getStatus());
console.log(ayuda.getTitleAndAuthor())

