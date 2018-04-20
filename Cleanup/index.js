const axios = require('axios')

module.exports = async function run (context) {
  try {
    context.log('Start cleanup')
    await axios.get(process.env.CHAT_CLEANUP_URL)
    context.log('Finished cleanup')
    context.done()
  } catch (error) {
    context.log('An error occurred')
    context.done(error)
  }
}
