import React from 'react';
import * as randomToDo from './randomToDo';
import ToDo from './ToDo';

class ToDos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: randomToDo.getRandomToDos(3)
        };
        this.addToDo = this.addToDo.bind(this);
    }

    addToDo() {
        const todos = this.state.todos.map(item => item); // clone
        todos.push(randomToDo.getRandomToDo(todos));
        this.setState({ todos });
    }

    render() {
        return (
            <div className="todo-container">
                <div className="row mb-2">
                    <h2 className="col-3">To Dos</h2>
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.addToDo}>Add Random To Do</button>
                    </div>
                </div>
                {this.state.todos.map((item, index, arr) => <ToDo
                    todo={item}
                    key={item.id}
                    isFirst={index === 0}
                    isLast={index === arr.length - 1}
                />)}
            </div>
        );
    }
}

export default ToDos;