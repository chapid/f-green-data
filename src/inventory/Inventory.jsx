import { ListLineAction } from "./ListLineAction";
import { MyListLineActions } from "./MyListLineActions";

function Inventory() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Mis Lineas de Acción</h1>
      <MyListLineActions />
      <h1 className="text-2xl font-semibold text-gray-900">Líneas de Acción</h1>
      <ListLineAction />
    </div>
  );

};

export { Inventory };