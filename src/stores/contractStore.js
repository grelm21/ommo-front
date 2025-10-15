import { defineStore } from "pinia";
import axios from "@/services/api";

export const useContractStore = defineStore("contractStore", {
	state: () => ({
	  /** @type {Contract[]} */
		contracts: [],
		/** @type {Contract | null} */
		contract: null,
		isLoading: true,
		error: null,
	}),
	getters: {
		// currentLocation: (state) => state.items[0] || null,
	},
	actions: {
		async createContract(contract) {
			return await axios
				.post("/contracts", contract)
				.then((response) => {
					this.contract = response.data;
					console.log(this.contract);
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
