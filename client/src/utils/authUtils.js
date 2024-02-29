import authApi from "../api/authApi"
/**
 * Normalize a port into a number, string, or false.
 */
const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem('token')
    if (!token) return false
    try {
      const res = await authApi.verifyToken()
      return res.user
    } catch {
      return false
    }
  }
}

export default authUtils
