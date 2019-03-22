import React from 'react'
import './dialog.css'

export default class Dialog extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

	closeDialog(e){
		this.props.dialogOpen(false)
	}

	handleParent(e) {
		e.nativeEvent.stopImmediatePropagation() //阻止document原声时间冒泡
	}

	handleInput(e) {
		e.nativeEvent.stopImmediatePropagation()
		const value = this.state.value
		if(value !== ''){
			const newResource = value.trim()
			const resourceArray = newResource.split(',')
			this.props.resources(resourceArray)
		}
	}

	render() {
		return(
			<section className="dialog" onClick={(e) => this.handleParent(e)}>
				<span className="bot"></span>
				<span className="top"></span>
				<i className="icon-close" onClick={(e) => this.closeDialog(e)}></i>
				<p className="text">Separate multiple resource name with commas</p>
				<input type="text" placeholder="Ubuntu,Chrome" 
					defaultValue={this.state.value} className="input" onChange={(event) => this.setState({value: event.target.value})}/>
				<section className="add-btn" onClick={(e) => this.handleInput(e)}>Add Resource</section>
				<section className="cancel-btn" onClick={(e) => this.closeDialog(e)}>Cancel</section>
			</section>
		)
	}
}