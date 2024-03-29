import axios from 'configs/axios'
import { CHECKOUT_BOOKING } from '../types'

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  })
}

export const submitBooking = (payload) => (dispatch) => {
  return axios.post(`/booking-page`, payload, {
    headers: { contentType: 'multipart/form-data' },
  })
}
