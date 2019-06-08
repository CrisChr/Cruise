import React from 'react'
import Badges from 'components/main/Badges/Badges'
import Nav from 'components/main/Nav/Nav'
import Cards from 'components/main/Card/Cards'
import './main.css'

export default class Main extends React.Component {
	render() {
		return(
			<article className="content-container">
				<Badges/>
				<Nav/>
				<Cards/>
			</article>
		)
	}
}