import Navigation from './components/Navigation'
import InputForm from './components/InputForm'
import Rank from './components/Rank'
import Weather from './components/Weather'
import Signin from './components/Signin'
import Register from './components/Register'
import { useState } from 'react'

const initialState = {
  input: '',
  city: '',
  temperature: '',
  weather: '',
  weatherIcon: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: new Date(),
  }
}

function App() {
  const [state, setState] = useState(initialState)

  const loadUser = (data) => {
    // console.log(data.entries);
    setState((prevState) => {return {...prevState, user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    }}})
  }

  // Route
  function onRouteChange(route) {
    if (route === 'signin') {
      setState(initialState)
    } else if (route === 'home') {
      setState((prevState) => {return {...prevState, isSignedIn: true}})
    }
    setState((prevState) => {return {...prevState, route: route}})
  }

  // Content --> for weather content
  function onInputChange(e) { 
    const inputValue = e.target.value 
    setState((prevState) => {return {...prevState, input: inputValue}})
  }

  async function onWeatherSubmit() {
    // Send location to api location e.g. Manila
    // Input Validation
    const userInput = state.input; 
    if (!userInput) {
      return alert("You need to input something")
    }

    // Direct geocoding
    fetch('http://localhost:3000/cityurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: userInput,
      })
    })
    .then(response => response.json())
    .then(response => {
      const {lat, lon} = response[0];
      if (response) {
        fetch('http://localhost:3000/cityurlweather', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            lat: lat,
            lon: lon,
          })
        })
        .then(response => response.json())
        .then(weatherStats => {
          const {name, main, weather} = weatherStats;
          const {temp} = main;
          const {description, icon} = weather[0];
          setState((prevState) => ({
            ...prevState,
            city: name,
            temperature: `Temperature: ${temp}`,
            weather: `Description: ${description}`,
            weatherIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`
          }))
          // Update User Entries
          fetch('http://localhost:3000/city', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id:  state.user.id,
            })
          })
          .then(response => response.json())
          .then(count => {
            // Update number of entries
            setState((prevState) => {return {...prevState, user: {
              ...prevState.user,
               entries: count
            }}})
          })
          .catch (console.error)
        })
        .catch (console.error)
      }
    })
    .catch (console.error)
  }

  return (
    /* 
    we want to call onRouteChange(pass either home, signin or register)
    if route === home ? Display Rank, InputForm, and Weather Component : Display Signin Component or Display Register Component
    */
    <div>
      <Navigation onRouteChange={onRouteChange} isSignedIn={state.isSignedIn}/>
      {
      state.route === 'home' 
      ? /* true */
      <div>
        <Rank 
          name={state.user.name}
          entries={state.user.entries}
        />
        <InputForm
          onButtonSubmit={onWeatherSubmit}
          onInputChange={onInputChange}
        />
        <Weather 
          city={state.city}
          temperature={state.temperature}
          weather={state.weather}
          weatherIcon={state.weatherIcon}
        />
      </div>
      : (state.route === 'signin' ? <Signin onRouteChange={onRouteChange} loadUser={loadUser}/> : <Register onRouteChange={onRouteChange} loadUser={loadUser}/>)
      }
    </div>
  )
}

export default App

