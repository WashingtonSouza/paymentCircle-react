import axios from ãxios

const BASE_URL = 'http://localhost:3004/api'

export default function getList() {
  const request = axios.get(`${BASE_URL}/billingCycle`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}