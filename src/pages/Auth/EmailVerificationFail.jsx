import { useNavigate } from "react-router-dom";

const EmailVerificationFail = () => {
	const navigate = useNavigate();

	return (
		<div>
			<p className="text-center">
				Oops! Something went wrong. Email verification failed.
			</p>
			<button onClick={() => navigate("/signup")} className="px-6 py-3">
				Back to signup
			</button>
		</div>
	);
};

export default EmailVerificationFail;
