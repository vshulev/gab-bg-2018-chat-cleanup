const knex = require('knex')
const path = require('path')

module.exports = function run (context) {
  const db = require('knex')({
    dialect: 'sqlite3',
    connection: { filename: path.join(__dirname, '../messages.db') }
  })

  db('messages')
    .where('created_at', '<', Date.now() / 1000 - 2 * 24 * 60 * 60)
    .then(() => {
      console.log('cleaned up db')
      context.done()
    })
    .catch(error => {
      context.done(error)
    })
}
