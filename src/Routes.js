import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import Home from "./pages/Auth/Home";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Signup from "./pages/Auth/Signup";
import ResetPassword from "./pages/Auth/ResetPassword";
import PleaseVerify from "./pages/Auth/PleaseVerify";
import UserDashBoard from "./pages/Dashboard/user";
import PrivateRoute from "./util/PrivateRoute";
import EmailVerificationLandingPage from "./pages/Auth/EmailVerificationLandingPage";

const RouteHandler = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/please-verify" element={<PleaseVerify />} />
				<Route
					path="/reset-password/:passwordResetCode"
					element={<ResetPassword />}
				/>
				<Route
					path="/verify-email/:verificationString"
					element={<EmailVerificationLandingPage />}
				/>
				<Route
					path="/user"
					element={
						<PrivateRoute>
							<UserDashBoard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
};

export default RouteHandler;
