import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordR: ''
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
      <input type="text" name="name" placeholder="name..." required onChange={handleChange}/>
      <input type="email" name="email" placeholder="email..." required onChange={handleChange}/>
      <input type="password" name="password" placeholder="password" required onChange={handleChange}/>
      <input type="password" name="passwordR" placeholder="confirm password" required onChange={handleChange}/>
      <button>Sign Up</button>
      <p>Already have an account? <Link to='/auth/login'>login</Link></p>
    </form>
  );
}

export default Register