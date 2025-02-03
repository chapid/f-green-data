function MyLineItem(props) {
  return (
    <article key={props.id} className="flex max-w-xl flex-col bg-white items-start justify-between border border-gray-300 rounded-lg p-4 shadow-md">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={props.datetime} className="text-gray-500">
          {props.date}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          <a href={props.href}>
            <span className="absolute inset-0" />
            {props.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm text-gray-600">{props.description}</p>
      </div>
    </article>
  )
};

export { MyLineItem };