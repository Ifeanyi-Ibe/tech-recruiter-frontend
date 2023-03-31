import { useNavigate } from "react-router-dom";

const EmailVerificationSuccess = () => {
	const navigate = useNavigate();

	return (
		<div>
			<p className="text-center">Thanks for verifying your email</p>
			<p className="text-xl text-center">
				Now you can use all the app's features
			</p>
			<button onClick={() => navigate("/")} className="px-6 py-3">
				Back to home page
			</button>
		</div>
	);
};

export default EmailVerificationSuccess;
