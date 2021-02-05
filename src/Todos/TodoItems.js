import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const TodoItems = ({addTodoAction, todos}) => {
    const [inputText, setInput] = useState('');
    const [error, setError] = useState(false)
    const handleInput = (e) => {
        setInput(e.target.value);
        setError(false)
    }

    function findDulicate(todo){
       return todo.text === inputText;
    }
    const addTodo = () => {
      if(!todos.find(findDulicate)) {
        addTodoAction(inputText);
        setInput('')
      }else {
        setError(true)
      }
      
    }
    return (
      <div className="container my-5 w-50">
        <div>
          <input className="mx-2 border px-4" type="text" value={inputText} onChange={handleInput} placeholder="type todo value..." />
          <Button variant="contained" color="primary" onClick={()=>addTodo()}>
           AddItem
          </Button>
        {error && <p className="text-danger my-2">Duplicates not allowed</p>}
        </div>
        
        <TodoList/>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  addTodoAction: (payload) => {
    dispatch({ type: 'add', payload })
  }
});

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
