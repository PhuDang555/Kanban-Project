import axiosClient from "./axiosClient"
/**
 * Normalize a port into a number, string, or false.
 */
const authApi = {
  signup: params => axiosClient.post('auth/signup', params),
  login: params => axiosClient.post('auth/login', params),
  verifyToken: () => axiosClient.post('auth/verify-token')
}

export default authApi
