import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import EmailVerificationSuccess from "./EmailVerificationSuccess";
import EmailVerificationFail from "./EmailVerificationFail";

const EmailVerificationLandingPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);
	const { verificationString } = useParams();
	const BaseURL = process.env.REACT_APP_AUTH_BASE_URL;

	useEffect(() => {
		const loadVerification = async () => {
			try {
				const response = await axios.put(`${BaseURL}/verify-email`, {
					verificationString,
				});
				const { token, user } = response;
				localStorage.setItem(
					"user",
					JSON.stringify({ accessToken: token, ...user })
				);
				setIsSuccess(true);
				setIsLoading(false);
			} catch (error) {
				setIsSuccess(false);
				setIsLoading(false);
			}
		};

		loadVerification();
	}, [verificationString]);

	if (isLoading) return <p className="text-center">Loading...</p>;
	if (!isSuccess) return <EmailVerificationFail />;

	return <EmailVerificationSuccess />;
};

export default EmailVerificationLandingPage;
