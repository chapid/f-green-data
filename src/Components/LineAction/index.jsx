function LineItem(props) {
  return (
    <li key={props.id} className="flex justify-between items-center gap-x-6 py-5">
      <div className="flex items-center gap-x-4">
        <img alt="" src={props.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
        <p className="text-sm font-semibold text-gray-900">{props.name}</p>
      </div>
      <p className="text-sm text-gray-500 flex-1">{props.description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex-none">Agregar</button>
    </li>
  );
}

export { LineItem };