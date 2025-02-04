import { useContext } from "react";
import { ListLine } from "./ListLine"
import { MyListLineActions } from './MyListLineActions'
import { LineItemContext } from '../../Context';
import { Modal } from '../../Components/Modal';
import { LineItemForm } from './LineItemForm';

function Inventory() {
  const contextItem = useContext(LineItemContext);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-gray-900">Mis Lineas de Acción</h1>
      <MyListLineActions />
      <h1 className="text-2xl font-semibold text-gray-900">Líneas de Acción</h1>
      <ListLine />
      <div id="modal"></div>
      {contextItem.openModal && (
        <Modal>
          <LineItemForm />
        </Modal>
      )}
    </div>
  );

};

export { Inventory };