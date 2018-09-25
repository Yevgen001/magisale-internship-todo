import React, {Component} from 'react';
import './ToDoItem1.css';

class ToDoItem1 extends Component {

    render() {
        return (
            <div className="ToDoItem1">
                <p className="ToDoItem1-Text">{this.props.item}</p>
            </div>
        );
    }
}

export default ToDoItem1;
