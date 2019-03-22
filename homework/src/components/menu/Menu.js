import React from 'react'
import './menu.css'

export default class Menu extends React.Component {
	render() {
		return (
			<article className="menu-container">
				<div className="menu">
					<section className="nav">
						<i className="icon-dashboard">&nbsp;&nbsp;DASHBOARD</i>
					</section>
					<section className="nav">
						<i className="icon-sitemap">&nbsp;&nbsp;AGENT</i>
					</section>
					<section className="nav">
						<i className="icon-boat">&nbsp;&nbsp;MY CRUISE</i>
					</section>
					<section className="nav">
						<i className="icon-life-bouy">&nbsp;&nbsp;HELP</i>
					</section>
					<section className="history">
						<p>History</p>
						<ul className="ci_address">
							<li>bjstdmngbgr02/Acceptance_test</li>
							<li>bjstdmngbgr03/Acceptance_test</li>
							<li>bjstdmngbgr04/Acceptance_test</li>
							<li>bjstdmngbgr05/Acceptance_test.....</li>
							<li>bjstdmngbgr06/Acceptance_test</li>
							<li>bjstdmngbgr07/Acceptance_test</li>
							<li>bjstdmngbgr08/Acceptance_test</li>
							<li>bjstdmngbgr09/Acceptance_test</li>
							<li>bjstdmngbgr11/Acceptance_test</li>
							<li>bjstdmngbgr12/Acceptance_test</li>
							<li>bjstdmngbgr13/Acceptance_test</li>
						</ul>
					</section>
				</div>
			</article>
		)
	}
}