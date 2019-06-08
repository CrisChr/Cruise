import React from 'react'
import './header.css'
import 'assets/font-icons/fonts.css'

export default class Header extends React.Component {
	render() {
		return (
			<header className="header-container">
				<section className="item1"></section>
				<section className="item2">
					<img src="src/components/header/logo.svg" width="157" height="50"/>
				</section>
				<section className="item3">
					<span className="avatar">
						<i className="icon-angle-down"></i>
					</span>
				</section>
			</header>
      
		)
	}
}