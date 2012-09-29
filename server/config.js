
module.exports = {
  auth: {
    LOGIN_URL: '/login',
    SUCCESS_REDIRECT_URL: '/',
    FAILURE_REDIRECT_URL: '/login',
  },
  ds: {
    production: "mongodb://user:pass@example.com:1234/sapling-prod",
    development: "mongodb://localhost/sapling-dev",
    test: "mongodb://localhost/sapling-test",
  }
};
