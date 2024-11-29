import React from 'react';

class ToDo extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <div className="row mb-2">
                <div className="col-3">
                    {todo.description}
                </div>
                <div className="col">
                    <button className="btn btn-secondary mr-1" disabled={this.props.isFirst} title="Move up one position.">Up</button>
                    <button className="btn btn-secondary mr-1" disabled={this.props.isLast} title="Move down one position.">Down</button>
                    <button className="btn btn-secondary mr-1" disabled={this.props.isFirst} title="Move to first position.">First</button>
                    <button className="btn btn-secondary mr-1" disabled={this.props.isLast} title="Move to last position.">Last</button>
                    <button className="btn btn-danger mr-1" title="Delete this task entirely.">Delete</button>
                    <button className="btn btn-secondary" disabled={todo.isComplete} title={todo.isComplete ? "This task is done." : "Complete this task."}>
                        {todo.isComplete ? "Done!" : "Complete"}
                    </button>
                </div>
            </div>
        );
    }
}

export default ToDo;