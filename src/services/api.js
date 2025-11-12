import axios from "axios";
import router from "@/router";

const api = axios.create({
	baseURL: "http://localhost:4040/api",
	// baseURL: "http://80.93.62.150:8080",
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.error("API call failed:", error);

		if (error.message === "Network Error" || error.code === "ERR_NETWORK") {
			console.log("Network Error");
			// router.push({name: "ConnError", query: { error: `${error.message} ${error.code}` }});
		} else if (error.response.status === 401) {
			console.log("Unauthorized");
		} else if (error.response.status === 422) {
			// Not found
			console.log("Unprocessable entity");
		} else if (error.response.status === 404) {
			// Not found
			console.log("Page not found");
		}
		return Promise.reject(error);
	},
);

export default api;
