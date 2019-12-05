import React, {Component,useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [], nextId: 0

    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }
    
  // function enterKey(key) {
  //   const [pressed, setPressed] = useState(false)
  //   const match = event => key.toLowerCase() == event.key.toLowerCase()
  //   const onDown

  //   return pressed 

  // }


  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId,text:todoText})
    this.setState({
      todos:todos,
      nextId:++this.state.nextId
    }

    );
  }

  removeTodo(id){
    {console.log(EventTarget)}
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !==id),
      nextId:--this.state.nextId
    })
  }


  render(){
    return (
      <div className="App">
        <div className='todo-wrapper'>
            <Header/> 
            <TodoInput todoText='' addTodo={this.addTodo}/>
            <ul> {
                this.state.todos.map ((todo) => {

                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>

                })
              }
            </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
