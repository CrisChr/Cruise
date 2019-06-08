import React from 'react'
import Header from 'components/header/Header'
import Menu from 'components/menu/Menu'
import Main from 'components/main/Main'
import './page.css'

export default class Page extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="main-container">
					<div className="place-holder-1"></div>
					<Menu/>
					<div className="place-holder-2"></div>
					<Main/>
					<div className="place-holder-1"></div>
				</div>
			</div>
		)
	}
}