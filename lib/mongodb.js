// lib/mongodb.js

import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local or environment variables')
}

const uri = process.env.MONGODB_URI
const options = {
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  retryWrites: true,
  retryReads: true,
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') { 
  // In development mode, use a global variable to preserve the connection
  // across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode (Vercel), create a new connection
  // MongoDB driver handles connection pooling automatically
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise