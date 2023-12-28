import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.createConnection(process.env.MONGO_URL_DESK, {
            useNewUrlParse: true,
            useUnifiedTopology: true,
        })
        conn && console.log("Mongo Connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectMongoDB