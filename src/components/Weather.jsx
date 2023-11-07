/* eslint-disable react/prop-types */
function Weather({city, temperature, weather, weatherIcon}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-white text-3xl">{city}</h1>
        <p className="font-bold text-white text-3xl">{temperature}</p>
        <div className="flex justify-center items-center">
          <p className="font-bold text-white text-3xl">{weather}</p>
          <img src={weatherIcon} alt="" />
        </div>
    </div>
  )
}
export default Weather