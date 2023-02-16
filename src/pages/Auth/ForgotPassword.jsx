import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    alert("Email Sent!");
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-700">
      <div className="w-1/3">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded flex-auto px-8 pt-6 pb-8 mb-4"
        >
          <h2>
            Please enter your email address so we can send you a link to reset
            your password
          </h2>
          <div className="mt-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="someone@gmail.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
