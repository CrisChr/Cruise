import React from 'react'
import 'css/nav.css'

export default class Nav extends React.Component {
	render() {
		return (
			<section className="navbar">
				<nav className="nav1">
					<div>All</div> 
					<div>Physical</div> 
					<div>Virtual</div>
				</nav>
				<nav className="nav2">
					<input type="text" placeholder="&#xf002;"></input>
				</nav>
				<nav className="nav3">
					<i className="icon-th-card"></i>
					<i className="icon-th-list" style={{marginLeft: 30, color:'#00B4CF'}}></i>
				</nav>
			</section>
		)
	}
}