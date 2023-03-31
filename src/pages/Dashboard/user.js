const UserDashBoard = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="flex h-screen divide-x-2">
			<div className="basis-1/6 mx-6 p-4">
				<div>Profile</div>
				<div>Jobs</div>
			</div>
			<div className="basis-5/6 mx-6">
				<h2 className="text-blue-900 text-3xl text-center mt-6">
					Welcome, {user.firstName}!
				</h2>
			</div>
		</div>
	);
};

export default UserDashBoard;
