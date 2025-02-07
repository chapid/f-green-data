import React from 'react';
import { useForm } from 'react-hook-form';

import { FormField } from '../../Components/FormField'
import { request, setAuthToken } from '../../api/AxiosHandler';

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
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Sign in failed");
      });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-7 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md border border-gray-300 p-6 rounded-lg shadow-md bg-slate-50">
        <img
          alt="Your Company"
          src="../public/iconGreen.png"
          className="mx-auto h-20 w-auto"
        />
        <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>

        <div className="mt-10">
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
          <p className='mt-4 text-sm font-light'>
            New to Green Data Connection? <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register here</a>
          </p>
        </div>
      </div>

    </div>
  )
}

export { SignIn }
