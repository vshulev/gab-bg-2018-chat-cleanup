const knex = require('knex')
const path = require('path')

module.exports = function run (context) {
  try {
    context.log('Start cleanup')

    const db = require('knex')({
      dialect: 'sqlite3',
      connection: { filename: path.join(__dirname, '../messages.db') }
    })

    context.log('Connected to DB')

    db('messages')
      .where('created_at', '<', Date.now() / 1000 - 2 * 24 * 60 * 60)
      .del()
      .then(() => {
        context.log('Cleaned up DB')
        context.done()
      })
      .catch(error => {
        context.log('Failed to clean up DB')
        context.done(error)
      })
  } catch (error) {
    context.log('An error occurred')
    context.done(error)
  }
}
