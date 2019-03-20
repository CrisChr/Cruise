import React from 'react'
import Badges from 'components/main/Badges'
import Nav from 'components/main/Nav'
import Cards from 'components/main/Cards'
import 'css/main.css'

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