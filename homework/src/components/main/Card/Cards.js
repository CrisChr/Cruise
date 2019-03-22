import React from 'react'
import CardDetails from './CardDetails'
import FetchData from 'utils/dataFetch'


export default class Cards extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			agents: []
		}
	}
	async componentWillMount() {
		const agentData = await FetchData()
		this.setState({
			agents: agentData
		})
	}

	render() {
		return (
			<CardDetails data={this.state.agents}/>
		)
	}
}