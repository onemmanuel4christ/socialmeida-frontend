import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
    <div className="card">
      <div className="left">
        <h1>Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, obcaecati nulla! Possimus eligendi quibusdam dicta saepe quam? Nemo doloremque natus nesciunt ducimus quis eveniet, nam asperiores fugit quos non. Rem!
        </p>
        <span>Do you have an account ?</span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
