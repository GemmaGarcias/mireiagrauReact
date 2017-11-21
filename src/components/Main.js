import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import GallerySessions from '../routers/GallerySessions'
import Portfolio from './gallery/Portfolio'
import Admin from './Admin'

const Main = () => (
	<div className="Main">
		<Switch>
			<Route exact path='/' component= {Home}></Route>
			<Route exact path='/gallery/:session' component={GallerySessions}></Route>
			<Route exact path='/gallery/:session/portfolio/:id' component= {Portfolio}></Route>
			<Route path='/admin' component= {Admin}></Route>
		</Switch>
	</div>
	)

export default Main