import React from 'react';
import { useForm } from 'react-hook-form';

import { FormField } from '../components/FormField'
import { request } from '../api/AxiosHandler';

function SignUp() {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    console.log(data);
    request("POST", "/auth/register", {
      email: data.email,
      password: data.password,
      fullName: data.username,
      type: "user"
    })
      .then((response) => {
        console.log(response.data);
        console.log("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        console.error("User creation failed");
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
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            id="username"
            label="Full name"
            type="text"
            placeholder="Enter your full name"
            validation={{
              required: "Name is required",
              minLength: {
                value: 6,
                message: "Name must be at least 6 characters"
              },
              maxLength: {
                value: 45,
                message: "Name must not exceed 45 characters"
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Name must contain only letters"
              }
            }}
            register={register}
            getValues={getValues}
            errors={errors}
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address"
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
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must include uppercase, lowercase, number, and special character"
              }
            }}
            register={register}
            getValues={getValues}
            errors={errors}
          />
          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            validation={{
              required: "Confirm Password is required",
              validate: value =>
                value === getValues('password') || "Passwords do not match"
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { SignUp }
