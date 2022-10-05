import express from 'express'
import { sequelize } from './database/database'
import budgetRoutes from './routes/budgets.routes'
import userRoutes from './routes/users.routes'
import authRoutes from './routes/auth.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors';

// import './models/budget'
// import './models/user'

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', "https://mybudget-challenge.netlify.app"); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(budgetRoutes)
app.use(userRoutes)
app.use(authRoutes)



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