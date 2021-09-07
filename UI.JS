class Ui {

  constructor(){
    this.profileSection = document.querySelector('.profile-container')
    this.container = document.querySelector('.container')
    this.searchSection = document.querySelector('.search-sect')
    this.reposContainer = document.querySelector('.repos-container')

  }
  clearAlert(){
    const currentAlert = document.querySelector('.error');
    if (currentAlert){
      currentAlert.remove()
    }
  }
  showErr(res){
    this.clearAlert()
    let err = document.createElement('div');
    err.classList.add('error')
    err.textContent = res;
    this.container.insertBefore(err,this.searchSection)
    setTimeout(()=> err.remove(),2500)
  }
   createProfile(res){
     
     this.profileSection.innerHTML = `
     <section class="profile-sect sections-utility">
        <div class="profile-pic-wrapper">
              <div class="photo-container">
                <img class="profile-pic" src="${github.checkifNull(res.avatar_url)}" alt="profile img">
              </div>      
            <p class="btn-primary"><a href=${res.html_url} target="_blank">View Profile</a></p>
          </div>
          <div class="profile-info">

            <ul class="profile-tabs-wrapper">
              <li class="profile-tabs tab-style-blue tab-1">Public Repos: <span class="num-repos">${github.checkifNull(res.public_repos)}</span></li>
              <li class="profile-tabs tab-style-grey tab-2">Public Gist: <span class="gist">${github.checkifNull(res.public_gists)}</span></li>
              <li class="profile-tabs tab-style-green tab-3">followers: <span class="followers">${github.checkifNull(res.followers)}</span></li>
              <li class="profile-tabs tab-style-lightblue tab-4">following: <span class="following">${github.checkifNull(res.following)}</span></li>
            </ul>
            
            <ul class="profile-content">
              <li class="profile-content-items">Name: ${github.checkifNull(res.name)}</li>
              <li class="profile-content-items">Company: ${github.checkifNull(res.company)}</li>
              <li class="profile-content-items">Location: ${github.checkifNull(res.location)}</li>
              <li class="profile-content-items">Member since: ${github.checkifNull(res.created_at)}</li>
            </ul>
          </div>
     
      </section>
     
     `;
   }
   showRepos(repos){
     let output = `<h2 class="sub-title">Latest Repos</h2>`;
     repos.forEach(one =>{
      output+= `
       <section class="sect-latest-repos">
      
      <div class="repos">
        <p class="repos-name"><a href="${one.html_url} target="_blank">${one.name}</a></p>
        <ul class="repos-list">
          <li class="tab-style-blue profile-tabs">Stars: ${one.stargazers_count}</li>
          <li class="tab-style-green profile-tabs">Watchers: ${one.watchers_count}</li>
          <li class="tab-style-yellow profile-tabs">Forks: ${one.forks_count}</li>
        </ul>
      </div>
      </section>
      
      `;
     })
     this.reposContainer.innerHTML = output;
   }

   clearProfile(element){
     element.innerHTML = '';
   }
 


}