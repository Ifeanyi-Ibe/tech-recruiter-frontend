import { useNavigate, Link } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	const logout = () => {
		localStorage.removeItem("user");
		navigate("/");
	};

	return (
		<div>
			<div className="flex justify-between pt-4 pb-4 mr-4 ml-4">
				<div className="font-bold text-lg text-blue-900">
					<h2>TechRecruitr</h2>
				</div>
				<div className=" font-bold text-lg">
					<span className="text-blue-900">About</span>
					{user && (
						<span className="text-blue-900 ml-3">
							<Link to="/user">My Dashboard</Link>
						</span>
					)}
				</div>
				<div className="font-bold text-lg">
					{!user && (
						<button
							onClick={() => navigate("/signup")}
							type="button"
							className="bg-blue-500 hover:bg-blue-700 text-white mr-4 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Sign Up
						</button>
					)}
					{!user && (
						<button
							onClick={() => navigate("/login")}
							type="button"
							className="bg-blue-500 hover:bg-blue-700 text-white text-sm mr-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Sign In
						</button>
					)}
					{user && (
						<button
							onClick={logout}
							type="button"
							className="border hover:bg-blue-800 hover:text-white text-blue-900 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Sign Out
						</button>
					)}
				</div>
			</div>
			<hr />
			<div className="flex flex-col justify-center items-center text-blue-900 h-screen">
				<h1 className="text-3xl my-2">
					Hire vetted talents from across the world to meet your
					organizational needs
				</h1>
				<h2 className="">
					A community of Tech professionals committed to excellence.
				</h2>
				<button className="border bg-blue-800 text-white px-4 rounded py-2 my-3">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Home;
