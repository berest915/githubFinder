import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//! Components
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import FbLoginPage from './components/facebook/Facebook'
//! Contexts
import GithubState from './context/github/GIthubState'
import AlertState from './context/alert/AlertState'
import NavState from './context/_nav/NavState'
import FbState from './components/facebook/FbState'
import './App.css'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <NavState>
          <FbState>
            <Router>
              <Navbar />
              <div className="container">
                <Alert /> {/*//! trig-display */}
                <Switch>
                  {/*//! Switch > chidren must be <Route> tag */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route exact path="/fb-login" component={FbLoginPage} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Router>
          </FbState>
        </NavState>
      </AlertState>
    </GithubState>
  )
}
export default App

//!
// import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// // import axios from 'axios'
// import Navbar from './components/layout/Navbar'
// import Users from './components/users/Users'
// import User from './components/users/User'
// import Search from './components/users/Search'

// import Alert from './components/layout/Alert'
// import About from './components/pages/About'
// import GithubState from './context/github/GIthubState'
// import AlertState from './context/alert/AlertState'

// import './App.css';

// const App = () => {
//   // ** initial state (befMount)
//   // state = {
//   //   users: [],
//   //   user: {},
//   //   repos: [],
//   //   loading: false,
//   //   alert: null
//   // }
//   //! replace with functional
//   //! const [var-read-state, fn-write-theState] = useState({ set-initial-state-here }) #return array[0,1]
//   // const [users, setUsers] = useState([])
//   // const [user, setUser] = useState({})
//   // const [repos, setRepos] = useState([])
//   // const [loading, setLoading] = useState(false)
//   // const [alert, setAlert] = useState(null)

//   // async componentDidMount() {
//   //   this.setState({ loading: true })

//   //   const res = await axios.get(`https://api.github.com/users?
//   //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
//   //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

//   //   this.setState({ users: res.data, loading: false })
//   // }

//   return (
//     <GithubState>
//       <AlertState>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Alert
//               // alert={alert}
//             />
//             {/* //? Router > Switch || Route || Fragment */}
//             <Switch>
//               {/* //! Route 1 - use render if consist multiple components */}
//               <Route exact path='/' render={props => (
//                 <Fragment>
//                   <Search
//                     //  searchUsers={searchUsers}
//                     // clearUsers={clearUsers}
//                     // isClear={users.length > 0 ? true : false}
//                     // showAlert={showAlert}
//                   />
//                   <Users />
//                 </Fragment>
//               )} />
//               {/* //! Route 2  - use component={} since consist single component && (since no props needed to pass) */}
//               {/* <Route exact path='/about' component={About} /> */}
//               <Route exact path='/about' component={About} />
//               {/* //! Route 3 - use render if fn and props need to be passed*/}
//               <Route exact path='/user/:login' component={User} />

//             </Switch>

//           </div>
//         </div>
//       </Router>
//       </AlertState>
//     </GithubState>
//   )
// }
// export default App;
