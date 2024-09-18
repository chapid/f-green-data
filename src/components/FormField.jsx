import { FaCheck, FaTimes } from "react-icons/fa";

function FormField(props) {
  const {
    id,
    label,
    type,
    placeholder,
    validation,
    register,
    getValues,
    errors,
  } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      </div>
      <div className="mt-2 relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {getValues(id) && !errors[id] && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaCheck className="h-5 w-5 text-green-500" />
          </span>
        )}
        {errors[id] && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaTimes className="h-5 w-5 text-red-500" />
          </span>
        )}
      </div>
      {errors[id] && (
        <p className="mt-2 text-sm text-red-600">
          {errors[id].message}
        </p>
      )}
    </div>
  );
};

export { FormField };
