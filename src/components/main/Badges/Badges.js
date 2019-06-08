import React from 'react'
import './badges.css'

export default class Badges extends React.Component {
	render() {
		return (
			<section className="notice-container">
				<div className="building-notice">
					<p className="building">Building</p>
					
					<div className="animation">
						<i className="icon-cog"></i>
					</div>
					<p className="count">3</p>
				</div>
				{/* <div style={{width: 20}}></div> */}
				<div className="idle-notice">
					<p className="idle">Idle</p>
					<div>
					<i className="icon-coffee"></i>
					</div>
					
					<p className="count">5</p>
					
				</div>
				{/* <div style={{width: 20}}></div> */}
				<div className="number-notice">
					<section>
						<div>ALL</div>
						<div>PHYSICAL</div>
						<div>VIRTUAL</div>
					</section>
					<section>
						<div>8</div>
						<div>4</div>
						<div>4</div>
					</section>
				</div>
			</section>
		)
	}
}