// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    const {todoDetails} = this.props
    const {title} = todoDetails
    this.state = {isStrike: false, text: title, isEdit: false}
  }

  onDelete = () => {
    const {todoDetails, deleteTodo} = this.props
    const {id} = todoDetails
    deleteTodo(id)
  }

  onChangeCheckBox = () => {
    this.setState(prev => ({isStrike: !prev.isStrike}))
  }

  onClickEditBtn = () => {
    this.setState(prev => ({isEdit: !prev.isEdit}))
  }

  onChangeEdit = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isStrike, isEdit, text} = this.state
    const isStrikeClassName = isStrike ? 'strike' : ''
    const editBtn = isEdit ? 'green-btn' : 'blue-btn'
    return (
      <li className="list-item">
        <input
          type="checkbox"
          className="checkbox"
          onChange={this.onChangeCheckBox}
        />
        <div className="item-container">
          <div>
            {isEdit ? (
              <input
                type="text"
                value={text}
                onChange={this.onChangeEdit}
                className="text-edit-input"
              />
            ) : (
              <p className={isStrikeClassName}>{text}</p>
            )}
          </div>
          <div>
            {isEdit ? (
              <button
                className={editBtn}
                type="button"
                onClick={this.onClickEditBtn}
              >
                Save
              </button>
            ) : (
              <button
                className={editBtn}
                type="button"
                onClick={this.onClickEditBtn}
              >
                Edit
              </button>
            )}

            <button className="btn-dlt" type="button" onClick={this.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    )
  }
}
export default TodoItem
