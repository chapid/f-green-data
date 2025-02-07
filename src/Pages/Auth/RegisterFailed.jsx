function RegisterFailed( { message } ) {
  return (
    <div className="flex flex-col items-center space-y-5 bg-white p-5 rounded-md shadow-md">
      <h1 className="font-bold text-lg">Register Error</h1>
      <p> {message} </p>
      <button
        onClick={ 
          () => {
            window.location.href = '/register';
        }}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Try Again</button>
    </div>
  );
}

export { RegisterFailed };