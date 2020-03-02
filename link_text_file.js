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


// // Code & Resources

//! Docs for the Github API:
//? https://developer.github.com/v3/

//! To Register Your Github App & Get Keys:
//? https://github.com/settings/applications/new

//! API Endpoints We Will Be Working With:

//? https://api.github.com/users

//? https://api.github.com/search/users?q=berest915

//? https://api.github.com/users/berest915

//? https://api.github.com/users/berest915/repos



//! bypass blocking from { reason: 'running scripts are disabled on the system' }  # as terminal executing 'netlify init'
// Get-ExecutionPolicy -List
// Set-ExecutionPolicy Unrestricted
// Set-ExecutionPolicy Unrestricted -Force

//! Github Finder
//! project-1 use github api instead of creating one with express
// https://githubfinder-from-tmedia.netlify.com/

