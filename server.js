import express from "express"
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()