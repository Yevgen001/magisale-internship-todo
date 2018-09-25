import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import ToDoItem1 from './components/ToDoItem1';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    'todo': "Title",
                    'todo1': "SomeText"
                    
                },
                {
                    'todo': "Wash and take away the Kurzhiy's cup from WС",
                    'todo1': "SomeText"
                },
                {
                    'todo': 'Do some rollton and cigarettes',
                    'todo1': "SomeText"
                }
                
            ],
            todo: '',
            todo1:''
            
        
        };
    };

    createNewToDoItem = () => {
      this.setState(({ list, todo,todo1 }) => ({
        list: [
            ...list,
          {
            todo,
            todo1
        
          }
        ],
        todo: '',
        todo1:''
      }));
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

    handleInput = e => {
      this.setState({
        todo: e.target.value
      });
    };

    handleInput1 = e => {
        this.setState({
          todo1: e.target.value
        });
      };

    deleteItem = indexToDelete => {
      this.setState(({ list }) => ({
        list: list.filter((toDo, index) => index !== indexToDelete)
      }));
    };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.state.list.map((item, key) => {
                                return [<ToDoItem1
                                                key={key}
                                                item={item.todo}
                                                />,
                                                <ToDoItem
                                                key={key}
                                                item={item.todo1}
                                                deleteItem={this.deleteItem.bind(this, key)}
                                                />]
                          }
                        )}
                        
                    </div>

                    <div>
                       <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <input type="text" value={this.state.todo1} onChange={this.handleInput1} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
