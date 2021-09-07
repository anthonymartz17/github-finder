const github = new Github();
const ui = new Ui();
let userSearch = document.querySelector('.input');

userSearch.addEventListener('keyup', e =>{
  e.preventDefault()
 
  if(userSearch.value !== ''){

    github.getdata(userSearch.value)
    .then(res => {
   
         if(res.userProfile.message === 'Not Found'){
           ui.showErr(`User ${res.userProfile.message}`)
           
         }

          ui.createProfile(res.userProfile)
          ui.showRepos(res.repos)
        
    })
  }else{
    ui.clearProfile(ui.profileSection)
    ui.clearProfile(ui.reposContainer)

  }

})