import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = ({todos = [], deleteTodo, completeTodo}) => {
    console.log(todos)
    return (
        <div className="my-5">
           {todos.length > 0 && todos.map(({text, id, completed})=>(
             <div key={id} className="flex-vertical-center border mb-4 px-3">
                <div className="flex-vertical-center">
                    <FormGroup row>
                       <FormControlLabel
                            control={<Checkbox 
                            checked={completed}
                            onChange={()=>completeTodo(id)}
                            name={text}
                            color="primary"
                        />}
                       />
                    </FormGroup>
                    <span className={completed ? 'strike' : ''}>{text}</span>
                </div>
                <span className="close" onClick={()=>deleteTodo(id)}>&#10005;</span>
            </div>
           ))}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: (payload) => {
      dispatch({ type: 'delete', payload })
    },
    completeTodo: (payload) => {
        dispatch({ type: 'complete', payload })
      }
});

const mapStateToProps = state => ({
  todos: state.todos
});

TodoList.defaultProps = {
  todos: []
}

TodoList.propTypes = {
  todos: PropTypes.shape([{}])
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);