import express from 'express'
import { sequelize } from './database/database'
import budgetRoutes from './routes/budgets.routes'
import userRoutes from './routes/users.routes'
import cors from 'cors';

// import './models/budget'
// import './models/user'

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors());
app.use(express.json())
app.use(budgetRoutes)
app.use(userRoutes)


async function start () {
  try {
    // await sequelize.authenticate()
    await sequelize.sync();
    console.log('DB Connection has been established  successfully.')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

start()
