import { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../service/auth";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const data = { email, password };
    alert("Logged in");
    authService
      .login(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-700">
      {errorMessage && <div className="center">{errorMessage}</div>}
      <div className="w-1/3">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded flex-auto px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="someone@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-8">
            <span className="text-sm mr-2">Don't have an account?</span>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
