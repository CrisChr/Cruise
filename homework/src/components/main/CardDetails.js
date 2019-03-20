import React from 'react'
import ResourceBtn from 'components/main/ResourceBtn'
import UpdateData from 'utils/dataUpdate'
import Dialog from 'components/main/Dialog'
import 'css/cards.css'

export default class CardDetails extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			agent: {},
			openDialog: false,
			currentId: '',
			closeDialogByDocument: true 
		}
	}

	pushAgents(items){
		const list = []
		items.forEach(item => {
			let imgUrl = ''
			switch(item.os){
			case 'windows':
				imgUrl = 'assets/os-icons/windows.png'
				break
			case 'ubuntu':
				imgUrl = 'assets/os-icons/ubuntu.png'
				break
			case 'debian':
				imgUrl = 'assets/os-icons/debian.png'
				break
			case 'suse':
				imgUrl = 'assets/os-icons/suse.png'
				break
			case 'centos':
				imgUrl = 'assets/os-icons/cent_os.png'
				break
			default:
				break
			}
			list.push(
				<article className="card-list" key={item.id}>
					<img src={imgUrl} alt="WindowsOS" height="80" width="80"/>
					<div style={{width:20}}></div>
					<section className="details">
						<section className="details-content">
							<i className="icon-desktop"></i>
							<div style={{width:10}}></div>
							<a href="#">{item.name}</a>
							<div style={{width:50}}></div>
							<div className={item.status == 'idle' ? 'idle-text' : 'building-text'}>{item.status}</div>
							<div style={{width:50}}></div>
							<i className="icon-info"></i>
							<div style={{width:10}}></div>
							<div>{item.ip}</div>
							<div style={{width:50}}></div>
							<i className="icon-folder"></i>
							<div style={{width:10}}></div>
							<div>{item.location}</div>
						</section>
						<ResourceBtn resources={item.resources} 
							delete={(e) => this.deleteHandle(item, e)}
							openPlus={(e) => this.openDialog(true, item.id, e)}/>
						{
							this.state.openDialog && this.state.currentId == item.id  ? 
								<Dialog dialogOpen={(e) => this.openDialog(false, item.id, e)} dialogId={item.id} 
									currentId={this.state.currentId} resources={(e) => this.addResource(item, e)}/> : ''
						}
					</section>
				</article>
			)
		})
		return list
	}

	//get the id and delete index and to PUT
	deleteHandle(item, deleteIndex) {
		item.resources.splice(deleteIndex, 1)
		this.setState({
			agent: item
		})

		//update current agent
		UpdateData(item)
	}

	//add new resource and update
	addResource(item, resourcesArray) {
		resourcesArray.forEach(resource => {
			item.resources.push(resource)
		})
		UpdateData(item)
		this.setState({
			agent: item
		})
		this.closeDialogClickDocument() //close dialog
	}

	openDialog(open, currentId, e) {
		this.setState({
			openDialog: open,
			currentId: currentId
		})
	}

	closeDialogClickDocument(e) {
		this.setState({
			openDialog: false
		})
	}

	//绑定document原生dom事件，以实现点击空白处关闭气泡框
	componentDidMount(){
		document.addEventListener('click', (e) => this.closeDialogClickDocument(e))
	}

	render() {
		return(
			<section className="card-container">
				{this.pushAgents(this.props.data)}
			</section>
		)
	}
}