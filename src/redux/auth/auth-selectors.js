const getIsAuthenticated = state => state.auth.isAuthentificated;
const getUserEmail = state => state.auth.user.email;

export default { getIsAuthenticated, getUserEmail };
