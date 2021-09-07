class Github{
 constructor(){
  this.clientId = '9c9cc96701c4925edcdc';
  this.clientSecret = '35a7abb6dfd3dfe4a2ee69fa3b1970c7afe3a69c';
  this.amountOfRepos = 5;
  this.latestRepos = `created: asc`
 }
  
async getdata(user){

  const profile = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  
  const reposlist = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.amountOfRepos}&sort=${this.latestRepos}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

  const userProfile = await profile.json();
  const repos = await reposlist.json();

  return {
    userProfile,
    repos
  }
   
 }

 checkifNull(res) {
  return  res === null ? `Not listed` : res;
 }
    
  
}




