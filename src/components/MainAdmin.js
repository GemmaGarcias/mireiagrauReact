import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EditHome from './adminHandlers/EditHome'
import AddCollection from './adminHandlers/AddCollection'
import ViewImages from './adminHandlers/ViewImages.js'
import DeleteCollection from './adminHandlers/DeleteCollection'

const MainAdmin = (props) => (
	<div className="MainAdmin">
		<Switch>
			<Route exact path={`${props.match.path}/editHome`} component={EditHome}></Route>	
			<Route exact path={`${props.match.path}/newcollection`} component={AddCollection}></Route>
			<Route path={`${props.match.path}/allcollections`} component={ViewImages}></Route>
			<Route path={`${props.match.path}/:id/images`} component={AddCollection}></Route>
			<Route path={`${props.match.path}/removecollection`} component={DeleteCollection}></Route>
		</Switch>
	</div>
	)

export default MainAdmin
