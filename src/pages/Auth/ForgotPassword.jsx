import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	const BaseURL = process.env.REACT_APP_AUTH_BASE_URL;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email) return;

		try {
			await axios.put(`${BaseURL}/forgot-password/${email}`);
			setSuccess(true);
			setTimeout(() => {
				navigate("/login");
			}, 3000);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return success ? (
		<div className="grid place-items-center h-screen bg-slate-200">
			<div className="w-1/3">
				<h1 className="text-2xl font-medium text-purple-900">Success</h1>
				<p className="text-xl">Check your email for a reset link</p>
			</div>
		</div>
	) : (
		<div className="grid place-items-center h-screen bg-slate-200">
			<div className="w-1/3">
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded flex-auto px-8 pt-6 pb-8 mb-4"
				>
					<h2>
						Please enter your email address so we can send you a link to
						reset your password
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
