import express from 'express'
import { sequelize } from './database/database'
import budgetRoutes from './routes/budgets.routes'
import cors from 'cors';

// import './models/budget'

const app = express()
const PORT = 5000


app.use(cors());
app.use(express.json())
app.use(budgetRoutes)


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
