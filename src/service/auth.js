import axios from "../config/axios";

const BaseURL = process.env.REACT_APP_AUTH_BASE_URL;

export const login = (data) => {
	if (!data.email || !data.password) return null;
	return axios
		.post(`${BaseURL}/login`, data)
		.then((response) => {
			if (response.token) {
				const { token, user } = response;
				localStorage.setItem(
					"user",
					JSON.stringify({ accessToken: token, ...user })
				);
			}
			return response;
		})
		.catch((error) => Promise.reject(error));
};

export const addUser = (data) => {
	return axios
		.post(`${BaseURL}`, data)
		.then((response) => {
			return response;
		})
		.catch((error) => Promise.reject(error));
};
