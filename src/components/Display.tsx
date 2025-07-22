const boxClass =
  "w-full md:w-1/2 flex flex-col gap-4 border border-gray-400 px-5 py-3 rounded-md text-white font-semibold font-mono bg-gray-700/40"

const Display = () => {
  return (
    <>
      <div className="text-white text-2xl font-semibold p-5 text-center font-mono tracking-tight">
        Draw mathematical expressions on the canvas below.
      </div>
      <div className="w-full px-3 md:px-5 py-4 flex flex-col md:flex-row gap-4">
        <div className={boxClass}>Input: 3 + 4 x 5</div>
        <div className={boxClass}>Output: 23</div>
      </div>
    </>
  )
}

export default Display
