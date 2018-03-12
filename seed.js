const { db, Gardener, Plot, Vegetable } = require('./models')

Vegetable.create({ 
    name: 'tomato', 
    planted_on: new Date(2018, 2, 11),
    })



db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    db.close()
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    db.close()
  })


