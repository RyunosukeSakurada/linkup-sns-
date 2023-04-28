export const LoginStart = (user) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginErr = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
