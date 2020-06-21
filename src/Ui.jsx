import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class extends React.Component {
    render() {
	return (
	    <div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '1em', width: '33%'}}>
		<AddTodo todoService={this.props.todoService} />
		<TodoList todoService={this.props.todoService} />
	    </div>
	);
    }
}
