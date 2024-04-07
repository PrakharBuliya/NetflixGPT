import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form className="w-3/12 absolute p-12 mt-40 mx-auto right-0 left-0 bg-black text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* {!isSignInForm ? (
          <input
            type="text"
            placeholder="First Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-md"
          />
        ) : (
          ""
        )} */}
        {!isSignInForm ? (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-md"
            />
          </>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="email or mobile number"
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm ? (
            <p>
              <span className="text-gray-600">New to Netflix?</span> Sign up
            </p>
          ) : (
            <p>
              <span className="text-gray-600">Already a user?</span> Sign in
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
