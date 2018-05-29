import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/task.js';

class Task extends React.Component {

	handleClick(){
		let item = this.refs.item.value;
		Meteor.call('tasks.insert',item);
		this.refs.item.value = '';
	}

	handleEdit(id){
		let data = prompt("Update your value");
		Meteor.call('tasks.update',id,data);
	}

	handleDelete(id){
		Meteor.call('tasks.delete',id);
	}

	render(){
		return(
			<div>
				<header>
					<h1>Basic CRUD</h1>
				</header>
				<input type="text" ref='item'/>
				<input type="button" value="Add" onClick={() => this.handleClick()}/>
				<br />
				<ul>
					{this.props.tasks.map((val,index) => <li key={index}>{val.text}
						<input type="button" onClick={() => this.handleEdit(val._id)} value='Edit'/>
						<input type="button" onClick={() => this.handleDelete(val._id)} value='delete'/></li>)}
				</ul>
			</div>
		);
	}
}

export default withTracker(() => {
	Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(Task);