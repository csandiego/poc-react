import React from 'react';

export default class extends React.Component {
    constructor(props) {
	super(props);
	this.state = {todos: []};
    }

    async componentDidMount() {
	const todos = await this.props.todoService.list();
	this.unsubscribe = todos.subscribe(todos => {
	    this.setState({todos});
	});
    }

    componentWillUnmount() {
	this.unsubscribe();
    }

    render() {
	return (
	    <ul style={{listStyleType: 'none', paddingLeft: 0}}>
		{this.state.todos.map(todo => {return (
		    <li key={todo.todo} style={{clear: 'both'}}>
			<input type="checkbox" checked={todo.completed} onChange={e => {this.props.todoService.setCompleted(todo.todo, e.target.checked)}} />
			{todo.todo}
			<button style={{float: 'right'}} onClick={async e => {return this.props.todoService.delete(todo.todo)}}>Delete</button>
		    </li>
		)})}
	    </ul>
	);
    }
}
