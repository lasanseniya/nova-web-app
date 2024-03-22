const { mongoose } = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect()
        console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}