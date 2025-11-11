import { defineStore } from 'pinia'
import axios from '@/services/api'

export const useContractStore = defineStore('contractStore', {
  state: () => ({
    /** @type {Contract[]} */
    contracts: [],
    /** @type {Contract | null} */
    contract: null,
    partnerOne: {
      name: '',
      promise_id: null,
    },
    partnerTwo: {
      name: '',
      promise_id: null,
    },
    isLoading: false,
    error: null,
    state: 'names',
    states: ['names', 'promises', 'contract'],
  }),
  getters: {
    // currentLocation: (state) => state.items[0] || null,
    params: (state) => ({
      contract: {
        partner_one: state.partnerOne,
        partner_two: state.partnerTwo,
      },
    }),
  },
  actions: {
    stateForward(currentState) {
      this.state = this.states[this.states.indexOf(currentState) + 1]
    },
    stateBackward() {
      if (this.state === 'contract') {
        this.clearData()
      }
      this.state = 'names'
    },
    clearData() {
      this.contract = null
      this.partnerOne = {
        name: '',
        promise_id: null,
      }
      this.partnerTwo = {
        name: '',
        promise_id: null,
      }
    },
    async updatePartnerOne(name, promise_id) {
      if (name) {
        this.partnerOne.name = name
      }
      if (promise_id) {
        this.partnerOne.promise_id = promise_id
      }
      console.log(this.partnerOne)
    },
    async updatePartnerTwo(name, promise_id) {
      if (name) {
        this.partnerTwo.name = name
      }
      if (promise_id) {
        this.partnerTwo.promise_id = promise_id
      }
    },
    async createContract() {
      return await axios
        .post('/contracts', this.params)
        .then((response) => {
          this.contract = response.data
          console.log(this.contract)
          this.isLoading = true
        })
        .catch((err) => {
          this.error = err
        })
        .finally(() => {
            this.isLoading = false
        })
    },

    async fetchContract(id){
      return await axios
        .get(`/contracts/${id}`)
        .then((response) => {
          this.contract = response.data
          console.log(this.contract)
          this.isLoading = true
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
