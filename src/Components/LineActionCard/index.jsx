function MyLineItem(props) {
  return (
    <article key={props.id} className="flex max-w-xl flex-col bg-white items-start justify-between border border-gray-300 rounded-lg p-4 shadow-md h-54 w-full">
      <div className="group relative h-full w-full">
        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
            {props.title.substring(0,27)}...
        </h3>
        <p className="font-semibold mt-1 text-md text-gray-700">
          Año Base <span className="text-gray-900 font-normal">{props.baseYear}</span>
        </p> 
        <p className="font-semibold mt-1 text-md text-gray-700 mb-3">
          Año Histórico <span className="text-gray-900 font-normal">{props.historicalYear}</span>
        </p>
        <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg flex-none">
          Registrar
        </button>
      </div>
    </article>
  )
};

export { MyLineItem };