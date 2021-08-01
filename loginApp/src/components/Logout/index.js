// Write your code here
import './index.css'

const Logout = props => {
  const {onClickLogout} = props

  return (
    <button className="logout-button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default Logout
