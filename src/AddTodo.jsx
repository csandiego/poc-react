import React from 'react';

export default class extends React.Component {
    onSubmit = async e => {
	e.persist();
	e.preventDefault();
	const todo = await this.props.todoService.add({todo: e.target.elements.namedItem("todo").value});
	e.target.reset();
	return todo;
    }
    
    render() {
	return (
	    <form onSubmit={this.onSubmit}>
		<input type="text" name="todo" required style={{width: '100%'}} placeholder="New todo" />
	    </form>
	);
    }
}
