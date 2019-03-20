import React from 'react'
import 'css/resource.css'

export default class ResourceBtn extends React.Component {
	constructor(props){
		super(props)
	}

	getResources(resources){
		let reslist = []
		resources.forEach((res, index) => {
			reslist.push(
				<section className="browser" key={index} >{res}
					<i className="icon-trash" onClick={(e) => this.handleDelete(index, e)}></i>
				</section>
			)
		})
		return reslist
	}

	//handle that emmit index to parent component
	handleDelete(index, e) {
		this.props.delete(index)
	}

	openDialog(e) {
		e.nativeEvent.stopImmediatePropagation() //阻止document原声时间冒泡
		this.props.openPlus(true)
	}

	render(){
		return (
			<section className="details-content">
				<i className="icon-plus" onClick={(e) => this.openDialog(e)}></i>
				<section className="resource-container">
					{this.getResources(this.props.resources)}
				</section>
				<section className="deny-container">
					<section className="deny">
						<i className="icon-deny"></i>
            Deny
					</section>
				</section>
			</section>
		)
	}
}