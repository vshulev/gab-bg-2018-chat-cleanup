const axios = require('axios')

module.exports = function run (context) {
  try {
    context.log('Start cleanup')
    axios.get(process.env.CHAT_CLEANUP_URL)
      .then(() => {
        context.log('Finished cleanup')
        context.done()
      })
      .catch(error => {
        context.log('An error occurred')
        context.done(error)
      })
  } catch (error) {
    context.log('An error occurred')
    context.done(error)
  }
}
