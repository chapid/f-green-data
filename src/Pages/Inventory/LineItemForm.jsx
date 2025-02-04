import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LineItemContext } from "../../Context";
import { request } from '../../api/AxiosHandler';


function LineItemForm() {
  const contextItem = useContext(LineItemContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    request("POST", "/quantify-emissions", {
      base_year: parseInt(data.year, 10),
      historic_year: parseInt(data.yearHistorical, 10),
      action_line: contextItem.newLineAction.name,
      yearly_register: []
    })
      .then((response) => {
        contextItem.setOpenModal(false);
      })
      .catch((error) => {
        console.error("Failed to create line item");
      });
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="font-bold text-xl">Registro de Información</h1>
      <hr className="border-b-1 border-gray-400 my-4"/>
      <p className="text-base mb-2">Ingrese los años desde los cuales ha integrado en la empresa el seguimiento a las emisiones de carbono</p>
      <div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <label htmlFor="year" className="font-bold text-gray-700 w-1/3">Año Base</label>
              <input
                id="year"
                type="number"
                placeholder="Ingrese el año base"
                {...register("year", {
                  required: "Año es requerido",
                  min: {
                    value: 2000,
                    message: "Año debe ser mayor o igual a 2000"
                  }
                })}
                className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {errors.year && <span className="text-red-500 text-sm text-right">{errors.year.message}</span>}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <label htmlFor="yearHistorical" className="font-bold text-gray-700 w-1/3">Año Histórico</label>
              <input
                id="yearHistorical"
                type="number"
                placeholder="Ingrese el año histórico"
                {...register("yearHistorical", {
                  required: "Año es requerido",
                  min: {
                    value: 2000,
                    message: "Año debe ser mayor o igual a 2000"
                  }
                })}
                className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {errors.yearHistorical && <span className="text-red-500 text-sm text-right">{errors.yearHistorical.message}</span>}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white rounded-lg px-4 py-2"
              onClick={() => contextItem.setOpenModal(false)}>
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { LineItemForm };
