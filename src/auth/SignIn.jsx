import React from 'react';
import { useForm } from 'react-hook-form';

import { FormField } from '../components/FormField'
import { request, setAuthToken } from '../api/AxiosHandler';

function SignIn() {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    request("POST", "/auth/login", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        setAuthToken(response.data.token);
        console.log(response.data);
        console.log("Sign in successful");
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.error("Sign in failed");
      });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
            }}
            register={register}
            getValues={getValues}
            errors={errors}
          />

          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters"
              }
            }}
            register={register}
            getValues={getValues}
            errors={errors}
          />

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { SignIn }
