import { LineItem } from '../components/LineItem.jsx';


const ListLineExamples = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/200",
    name: "Natalia Mojica",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/200",
    name: "Natalia Mojica",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/200",
    name: "Natalia Mojica",
    description: "Lorem Ionly five centuries,",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/200",
    name: "Natalia Mojica",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/200",
    name: "Natalia Mojica",
    description: "Lorr since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
]
function ListLineAction() {
  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-80 overflow-y-auto p-6">
        <ul role="list" className="divide-y divide-gray-100 pb-4">
          {ListLineExamples.map((item) => (
            <LineItem
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ListLineAction };  