import { defineStore } from "pinia";
import axios from "@/services/api";

export const usePromiseStore = defineStore("promiseStore", {
	state: () => ({
	  /** @type {PromiseItem[]} */
		promises: [],
		/** @type {PromiseItem} */
		promise: null,
		isLoading: true,
		error: null,
	}),
	getters: {
		// currentLocation: (state) => state.items[0] || null,
	},
	actions: {
		async fetchItems() {
			return await axios
				.get("/promises")
				.then((response) => {
					this.promises = response.data;
					if (this.promises.length === 0) {
						this.error = "No promises found";
					}
					console.log(this.promises);
				})
				.catch((err) => {
					this.error = err;
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
});
