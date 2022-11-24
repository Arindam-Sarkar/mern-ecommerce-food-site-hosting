import mongoose from 'mongoose'
import dotenv from 'dotenv'

export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_KEY)
  } catch (error) {
    console.log(error)
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('Db disconnected')
})

mongoose.connection.on('connected', () => {
  console.log('Db Connected')
})