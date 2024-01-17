import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodo extends Component {
  state = {todoList: initialTodosList, addTodo: ''}

  deleteTodo = id => {
    const {todoList} = this.state
    const updateTodList = todoList.filter(each => each.id !== id)
    this.setState({todoList: updateTodList})
  }

  onChangeAddTodo = event => {
    this.setState({addTodo: event.target.value})
  }

  onAddTodoItem = event => {
    event.preventDefault()
    const {addTodo} = this.state
    const newTodo = {
      id: uuidv4(),
      title: addTodo,
    }
    this.setState(prevList => ({
      todoList: [...prevList.todoList, newTodo],
      addTodo: '',
    }))
  }

  render() {
    const {todoList, addTodo} = this.state
    return (
      <div className="bg-container">
        <div className="todos-constainer">
          <h1 className="main-heading">Simple Todos</h1>
          <form onSubmit={this.onAddTodoItem} className="form-container">
            <input
              type="text"
              value={addTodo}
              onChange={this.onChangeAddTodo}
              placeholder="what needs to be done!"
              className="add-input"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <ul className="un-list-todos">
            {todoList.map(each => (
              <TodoItem
                key={each.id}
                todoDetails={each}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodo
