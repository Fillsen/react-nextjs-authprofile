export const LoginRules = {
  login: (message) => ({
    required: true,
    message
  }),
  password: (message) => ({
    required: true,
    min: 6,
    message
  })
}