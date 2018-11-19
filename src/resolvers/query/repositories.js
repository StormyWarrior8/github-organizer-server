const axios = require('axios');

module.exports = async (root, args) => await axios
  .get('https://api.github.com/users/kenttoku/repos')
  .then(res => res.data);