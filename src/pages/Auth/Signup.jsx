import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "../../service/auth";

const Signup = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const reset = () => {
		setFirstName("");
		setLastName("");
		setPassword("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password || !confirmPassword || !firstName || !lastName)
			return toast("Please fill in all required fields.");
		if (password !== confirmPassword)
			return toast("Password and confirm password do not match.");
		const data = { email, firstName, lastName, password };
		addUser(data)
			.then((resp) => {
				reset();
				toast("Registration successful!");
				navigate("/please-verify");
			})
			.catch((err) => toast("Oops! Something went wrong."));
	};

	return (
		<div className="grid place-items-center h-screen bg-slate-200">
			{/* <h1>Log In</h1>
      {errorMessage && <div className="center">{errorMessage}</div>} */}
			<div className="w-1/3">
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded flex-auto px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<h1 className=" text-center font-bold">Create an account</h1>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="firstName"
						>
							First Name
						</label>
						<input
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="firstName"
							type="text"
							placeholder="Enter first name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="lastName"
						>
							Last Name
						</label>
						<input
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="lastName"
							type="text"
							placeholder="Enter last name"
							required
						/>
					</div>
					<div className="mb-4">
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
							required
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
							required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="confirmPassword"
						>
							Confirm Password
						</label>
						<input
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="confirmPassword"
							type="password"
							placeholder="******************"
							required
						/>
					</div>
					<div className="mb-6">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
					</div>
					<div className="mt-4">
						<span className="text-sm mr-2">Already have an account?</span>
						<Link
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							to="/login"
						>
							Sign In
						</Link>
					</div>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;
