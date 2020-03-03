import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//!  Components
import Navbar from './components/layout/Navbar'
import UserInfo from './components/users/UserInfo'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import SearchContainer from './components/pages/SearchContainer'
import NotFound from './components/pages/NotFound'
//! Contexts
import GithubState from './context/github/GIthubState'
import AlertState from './context/alert/AlertState'
import NavState from './context/_nav/NavState'

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<NavState>
					<BrowserRouter>
						<Navbar />
						<div className='container'>
							<Alert /> {/*//* trig-display */}
							<Switch>
								{/*//* Switch > chidren must be <Route> tag */}
								<Route exact path='/' component={SearchContainer} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={UserInfo} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</BrowserRouter>
				</NavState>
			</AlertState>
		</GithubState>
	)
}
export default App
