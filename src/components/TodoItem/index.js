// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="container">
      <p className="paragraph"> {title} </p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}
export default TodoItem
