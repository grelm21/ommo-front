import { defineStore } from "pinia";
import axios from "@/services/api";

export const usePromiseStore = defineStore("promiseStore", {
	state: () => ({
		items: [],
		item: null,
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
					this.items = response.data;
					this.item = this.items[0];
					if (this.items.length === 0) {
						this.error = "No promises found";
					}
					console.log(this.items);
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
