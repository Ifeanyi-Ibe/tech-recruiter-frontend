import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PleaseVerify = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, [navigate]);

	return (
		<div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
			<h1 className="text-2xl font-medium text-blue-800">
				Thank you for signing up!
			</h1>
			<p className="text-xl font-medium text-blue-800">
				A verification email has been sent to the email address you
				provided. Please verify your email to unlock full site features.
			</p>
		</div>
	);
};

export default PleaseVerify;
