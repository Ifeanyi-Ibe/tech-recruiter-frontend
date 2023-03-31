import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";

const ResetPassword = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);
	const { passwordResetCode } = useParams();
	const navigate = useNavigate();

	const BaseURL = process.env.REACT_APP_AUTH_BASE_URL;

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put(`${BaseURL}/reset-password`, {
				password,
				passwordResetCode,
			});
			setIsLoading(false);
			navigate("/login");
		} catch (error) {
			setIsSuccess(false);
			setIsLoading(false);
		}
	};

	return (
		<div className="grid place-items-center h-screen bg-gray-700">
			<div className="w-1/3">
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded flex-auto px-8 pt-6 pb-8 mb-4"
				>
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
						/>
					</div>
					<div className="mb-6">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={password !== confirmPassword}
						>
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
