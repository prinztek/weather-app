import { useState } from "react"

/* eslint-disable react/prop-types */
const initialSignInState = {signInEmail: "", signInPassword: ""};
function Signin({onRouteChange, loadUser}) {
  const [state, setState] = useState(initialSignInState)

  const onEmailChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      signInEmail: event.target.value,
    }))
  }  
  
  const onPasswordChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      signInPassword: event.target.value,
    }))
  }

  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:  state.signInEmail,
        password: state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user) // Updates the user details
          onRouteChange('home');
        }
      })
  }

  return (
    <div className="bg-purple-100 p-8 rounded shadow-md max-w-md items-center justify-center mx-auto m-8">
      <h2 className="text-5xl text-center font-semibold text-gray-800 mb-4">Sign In</h2>
      <div id="signin">
        <div className="mb-4">
            <label htmlFor="email"  className="block text-gray-600 text-sm font-medium">Email</label>
            <input onChange={onEmailChange} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-600"/>
        </div>
        <div className="mb-6">
            <label htmlFor="password"  className="block text-gray-600 text-sm font-medium">Password</label>
            <input onChange={onPasswordChange} type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-600"/>
        </div>
        <div className="flex flex-col items-center">
            <input onClick={onSubmitSignIn}
            className="bg-purple-600 text-white py-2 px-4 mb-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-600"
            type="submit"
            value="Sign in"
            />
            <p onClick={() => onRouteChange('register')}  className="text-blue-500 hover:underline text-sm">Register?</p>
        </div>
      </div>
    </div>
  )
}
export default Signin