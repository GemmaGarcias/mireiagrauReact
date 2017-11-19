import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EditHome from './adminHandlers/EditHome'

const MainAdmin = () => (
	<div className="MainAdmin">
		<Switch>
			<Route exact path='/edithome' component= {EditHome}></Route>
		</Switch>
	</div>
	)

export default MainAdmin