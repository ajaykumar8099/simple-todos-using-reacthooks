// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
