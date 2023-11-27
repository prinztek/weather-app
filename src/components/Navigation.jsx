/* eslint-disable react/prop-types */

function Navigation({onRouteChange, isSignedIn}) {
    if (isSignedIn) {
      return (
      <nav className="min-w-screen bg-purple-300 flex flex-row align-middle px-4 py-4 shadow-lg shadow-cyan-1000/50">
        <div className="flex flex-row align-middle ">
          <h1 className="font-bold text-slate-700 py-2 px-4 hover:text-slate-900">Weather App</h1>
        </div>
        <ul className="flex flex-row align-middle ml-auto">
          <li className="font-bold text-slate-700 py-2 px-4 hover:text-slate-900">
            <a href="/">Home</a>
          </li>
          <li className="font-bold text-slate-700	py-2 px-4 hover:text-slate-900">
            <a href="/">About</a>
            </li>
          <li className="font-bold text-slate-700	py-2 px-4 hover:text-slate-900">
            <a href="/">Profile</a>
          </li>
          <li className="cursor-pointer font-bold text-slate-700 py-2 px-4 hover:text-slate-900">
            <p onClick={() => onRouteChange('signin')}>Sign Out</p>
          </li>
        </ul>
      </nav>
      )
    } else {
      return (
      <nav className="min-w-screen bg-purple-300	flex flex-row align-middle px-4 py-4 shadow-lg shadow-cyan-1000/50">
        <div className="flex flex-row align-middle ">
          <h1 className="font-bold text-slate-700 py-2 px-4 hover:text-slate-900">Weather App</h1>
        </div>
        <ul className="flex flex-row align-middle ml-auto">
          <li className="font-bold text-slate-700	 py-2 px-4 hover:text-slate-900">
            <a href="/">About</a>
          </li>
            {/* Sign In and Register */}
          <li className="cursor-pointer font-bold text-slate-700 py-2 px-4 hover:text-slate-900">
            <p onClick={() => onRouteChange('signin')}>Sign In</p>
          </li>
          <li className="cursor-pointer font-bold text-slate-700 py-2 px-4 hover:text-slate-900">
            <p onClick={() => onRouteChange('register')}>Register</p>
          </li>
        </ul>
      </nav>
      )
    }
}

export default Navigation