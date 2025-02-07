function RegisterSuccessful() {
  return (
    <div className="flex flex-col items-center space-y-5 bg-white p-5 rounded-md shadow-md">
      <h1 className="font-bold text-lg">Register Successful</h1>
      <p>Thank you for registering with us.</p>
      <button
        onClick={ 
          () => {
            window.location.href = '/';
        }}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
    </div>
  );
}

export { RegisterSuccessful };