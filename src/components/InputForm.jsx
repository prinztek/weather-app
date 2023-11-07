/* eslint-disable react/prop-types */
function InputForm({onButtonSubmit, onInputChange}) {

  return (
    <div className="flex flex-col justify-center items-center m-6 mt-0">
      <p className="font-bold text-slate-700 mt-4 mb-2">This Weather App will show the current weather of the city you want. Give it a try</p>
      <div className="bg-purple-100 flex justify-center	px-4 py-4 shadow-lg shadow-rose-500/50 rounded mb-3">
        <input onChange={onInputChange} type="text" placeholder="Manila" className="text-2xl rounded-md px-4 py-4 mr-2 w-72 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
        <button onClick={onButtonSubmit} className="rounded-md font-bold text-white px-8 py-4 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Search</button>
      </div>
    </div>
  )
}
export default InputForm