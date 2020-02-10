//! npm i @client
//? npm i react-router-dom axios
//? npm i -D nodemon 

//! netlify deploy via cli
//? npm i -g netlify-cli
//* create file "netlify.toml" with
// [build]
//     publish='build'
//* .then > netlify init > _ans-some-questiions
//* .then > _goto-netlify > _build&deploy > _save-clientID-&-clientSecret- 2sets of key-value pairs 
//* _goback-vs > npm run build > netlify deploy --prod

//? useEffect with sectionized-consolelog && checkif condition below:
//? no dep, empty dep, xdep
//? x_comp trigger somethg changed which under c_comp's useEffect deps', c_useEffect would clog


// // Code & Resources
//!The final code for this project can be found in this Github repo:
//? https://github.com/bradtraversy/github-finder

//! Docs for the Github API:
//? https://developer.github.com/v3/

//! To Register Your Github App & Get Keys:
//? https://github.com/settings/applications/new

//! API Endpoints We Will Be Working With:

//? https://api.github.com/users

//? https://api.github.com/search/users?q=brad

//? https://api.github.com/users/bradtraversy

//? https://api.github.com/users/bradtraversy/repos


//! todo-cont
//? css ref - checkif(tmedia_github_repos_intro) #
//? breakpoint instead of console.log()

//! Github
//? Having an active Github account and recent projects inside will clear up a couple of things
//? You know how to use Basic Git commands.
//? You probably have experience with the Terminal.
//? You can clone projects, maybe even do pull-requests.
//? Knowing them can boost the confidence level of the hiring manager.
// The fix:  
//? Look for projects out there that interests you, try running them locally and forking them. 

//! Bash
//? Building the prototype is 10% of the work.
//? To get to production and funding, 
//? the small team at the startup must go through code deployments and picking a CICD strategy.
//? If you are interviewing at an internet company, 
//? it means there will be cloud resources and services that you will need to work with on a daily basis.

//! bypass blocking from { reason: 'running scripts are disabled on the system' }  # as terminal executing 'netlify init'
// Get-ExecutionPolicy -List
// Set-ExecutionPolicy Unrestricted
// Set-ExecutionPolicy Unrestricted -Force

//! Github Finder
//! project-1 use github api instead of creating one with express
// https://githubfinder-from-tmedia.netlify.com/

// useEffect(fn(), [])