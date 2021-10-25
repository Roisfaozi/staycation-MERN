import axios from 'axios'
import errorResponsehandler from './errorResponsehandler'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}api/v1/member`,
})

instance.interceptors.response.use((response) => response, errorResponsehandler)

export default instance
