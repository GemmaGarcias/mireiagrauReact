import React from 'react'
import {Link} from 'react-router-dom'

import MainAdmin from './MainAdmin'

const Admin = (props) => {
	return(
		<div className="container">
		<div>
			<h1>Admin site</h1>
		</div>
	    <div className="row">
	        <div className="col-sm-3 col-md-3">
	            <div className="panel-group" id="accordion">
	                <div className="panel panel-default">
	                    <div className="panel-heading">
	                        <h4 className="panel-title">
	                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span className="glyphicon glyphicon-folder-close">
	                            </span>Home</a>
	                        </h4>
	                    </div>
	                    <div id="collapseOne" className="panel-collapse collapse in">
	                        <div className="panel-body">
	                            <table className="table">
	                            	<tbody>
		                                <tr>
		                                    <td>
		                                        <a><span className="glyphicon glyphicon-picture text-primary"></span>Back Image</a>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <Link to='/admin/edithome'><span className="glyphicon glyphicon-pencil text-primary"></span>Main Title</Link>
		                                    </td>
		                                </tr>
	                                </tbody>
	                            </table>
	                        </div>
	                    </div>
	                </div>
	                <div className="panel panel-default">
	                    <div className="panel-heading">
	                        <h4 className="panel-title">
	                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span className="glyphicon glyphicon-th">
	                            </span>Gallery</a>
	                        </h4>
	                    </div>
	                    <div id="collapseTwo" className="panel-collapse collapse">
	                        <div className="panel-body">
	                            <table className="table">
		                            <tbody>
		                                <tr>
		                                    <td>
		                                        <Link to='/admin/allcollections'>All collections</Link> 
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <Link to='/admin/newcollection'>Add new collection</Link>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <span className="glyphicon glyphicon-trash text-danger"></span><Link to='/admin/removecollection' className="text-danger">
		                                            Delete collection</Link>
		                                    </td>
		                                </tr>
	                                </tbody>
	                            </table>
	                        </div>
	                    </div>
	                </div>
	                <div className="panel panel-default">
	                    <div className="panel-heading">
	                        <h4 className="panel-title">
	                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span className="glyphicon glyphicon-user">
	                            </span>Account</a>
	                        </h4>
	                    </div>
	                    <div id="collapseThree" className="panel-collapse collapse">
	                        <div className="panel-body">
	                            <table className="table">
	                            <tbody>
	                                <tr>
	                                    <td>
	                                        <a href="">Change Password</a>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        <a href="">Messages </a> <span className="label label-info">5</span>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        <span className="glyphicon glyphicon-trash text-danger"></span><a href="http://www.jquery2dotnet.com" className="text-danger">
	                                            Delete Account</a>
	                                    </td>
	                                </tr>
	                                </tbody>
	                            </table>
	                        </div>
	                    </div>
	                </div>
	                <div className="panel panel-default">
	                    <div className="panel-heading">
	                        <h4 className="panel-title">
	                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span className="glyphicon glyphicon-file">
	                            </span>Calendar</a>
	                        </h4>
	                    </div>
	                    <div id="collapseFour" className="panel-collapse collapse">
	                        <div className="panel-body">
	                            <table className="table">
	                                <tr>
	                                    <td>
	                                        <a href=""><span className="glyphicon glyphicon-calendar"></span></a>
	                                    </td>
	                                </tr>
	                            </table>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div className="col-sm-9 col-md-9">
	            <div className="well">
	                <h1>Settings</h1>
	 					<div className="col-sm-9 col-md-12">
							<MainAdmin {...props}/>
						</div>
	            </div>
	        </div>
	    </div>
	</div>
	)
}

export default Admin