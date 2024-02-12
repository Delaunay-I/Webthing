
const Grid = () => {
    const range = [1, 2, 3, 4]
;  return (
    <section>
        <p>Grid practice tests:</p>

        <div className="grid grid-cols-[200px_75px] my-3">
            <div className="bg-purple-300">200px</div>
            <div className="bg-orange-400">75px</div>
        </div>

        <div className="grid grid-cols-[50px_1fr_75px]">
            <div className="bg-purple-300">50px</div>
            <div className="bg-orange-400">1fr</div>
            <div className="bg-teal-400">75px</div>
        </div>

        <div className="grid grid-cols-4 gap-x-5 gap-y-[10px] my-3">
            {range.map((num) =>
                <div className="bg-fuchsia-400">{`col ${num}`}</div>
            )}
            {range.map((num) =>
                <div className="bg-fuchsia-400">{`col ${num}`}</div>
            )}
        </div>
        
    </section>
  )
}

export default Grid;