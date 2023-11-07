/* eslint-disable react/prop-types */
import { useState } from "react"
function Register({onRouteChange, loadUser}) {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const onNameChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      name: event.target.value
    }))
  } 

  const onEmailChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      email: event.target.value
    }))
  }  
  
  const onPasswordChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      password: event.target.value
    }))
  }

  const onSubmitRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:  state.email,
        password: state.password,
        name:  state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        loadUser(user) // Updates the user details
        onRouteChange('signin')
      }
    })
  }


  return (
    <div className="bg-purple-100 p-8 rounded shadow-md max-w-md items-center justify-center mx-auto m-8">
      <h2 className="text-5xl text-center font-semibold text-gray-800 mb-4">Register</h2>
      <div id="register">
        <div className="mb-4">
              <label htmlFor="name"  className="block text-gray-600 text-sm font-medium">Name</label>
              <input onChange={onNameChange} type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-600"/>
          </div>
          <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium">Email</label>
              <input onChange={onEmailChange} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-600"/>
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 text-sm font-medium">Password</label>
              <input onChange={onPasswordChange} type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-600"/>
          </div>
          <div className="flex flex-col items-center">
              <button onClick={onSubmitRegister} type="submit" className="bg-purple-600 text-white py-2 px-4 mb-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-600">Register</button>
          </div>
      </div>
  </div>
  )
}
export default Register