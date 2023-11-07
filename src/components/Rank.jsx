/* eslint-disable react/prop-types */
function Rank({name, entries}) {
  const { entries: entriesCount } = entries;
  let renderThis;
  if (typeof(entries) === "object") {
    renderThis = entriesCount;
  } else {
    renderThis = entries;
  }
  return (
    <div className="flex flex-col justify-center items-center m-12 mb-0">
      <div>
        <p className="font-bold text-white text-3xl">{`${name} your current entry count is...`}</p>
      </div>
      <div >
          <p className="font-bold text-white text-3xl">{renderThis}</p>
      </div>
    </div>
  )
}

export default Rank