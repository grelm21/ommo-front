interface Contract {
  id: number
  serial_number: string
  created_at: string
  updated_at: string
  partners: Partner[]
}

interface Partner {
  id: number
  name: string
  contract_id: number
  promise_id: number
  created_at: string
  updated_at: string
  promise: PromiseItem
}

interface PromiseItem {
  id: number
  code: string
  description: string
  created_at: string
  updated_at: string
}
