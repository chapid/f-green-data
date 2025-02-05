import { useState, useEffect , useContext} from 'react';
import { request } from '../../api/AxiosHandler';
import { LineItem } from '../../Components/LineItem'
import './modal.css'

function ListLine() {

  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    request("GET", "/quantify-emissions/action-lines")
      .then((response) => {
        setLines(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch lines");
      });
  }, []);

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-60 overflow-y-auto p-6 custom-scrollbar">
        <ul role="list" className="divide-y divide-gray-100 pb-4">
          {lines.map((item) => (
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

export { ListLine };  