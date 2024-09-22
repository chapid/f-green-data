function BoxWrapper(props) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      <div className="rounded-full h-12 w-12 flex items-center justify-center" style={{ backgroundColor: props.iconBgColor }}>
        <span className="text-2xl text-white">
          {props.icon}
        </span>
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">{props.title}</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">{props.value}</strong>
          <span className="text-sm text-green-500 pl-2">{props.unit}</span>
        </div>
      </div>
    </div>
  )
}

export { BoxWrapper };