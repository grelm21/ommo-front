import { defineStore } from 'pinia'
import axios from '@/services/api'

export const useContractStore = defineStore('contractStore', {
  state: () => ({
    /** @type {Contract[]} */
    contracts: [],
    /** @type {Contract | null} */
    contract: null,
    partner_one: {
      name: '',
      promise_id: '111',
    },
    partner_two: {
      name: '',
      promise_id: null,
    },
    isLoading: true,
    error: null,
  }),
  getters: {
    // currentLocation: (state) => state.items[0] || null,
  },
  actions: {
    async updatePartnerOne(name, promise_id) {
      if (name) {
        this.partner_one.name = name
      }
      if (promise_id) {
        this.partner_one.promise_id = promise_id
      }
      console.log(this.partner_one)
    },
    updatePartnerTwo(name, promise_id) {
      this.partner_two.name = name
      this.partner_two.promise_id = promise_id
    },
    async createContract(contract) {
      return await axios
        .post('/contracts', contract)
        .then((response) => {
          this.contract = response.data
          console.log(this.contract)
        })
        .catch((err) => {
          this.error = err
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
})
