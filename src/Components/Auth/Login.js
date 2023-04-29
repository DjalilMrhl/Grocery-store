import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm(prev=> {
      return {...prev, [name]: value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email..." required onChange={handleChange}/>
      <input type="password" name="password" placeholder="password" required onChange={handleChange}/>
      <button>Login</button>
      <p>Don't have an account? <Link to='/auth/register'>Register</Link></p>
    </form>
  );
}

export default Login;
