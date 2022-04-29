import mongoose from "mongoose"
import dotenv from 'dotenv'


const Connection = async (UserName, Password) => {
    const URL = `mongodb+srv://${UserName}:${Password}@cluster0.bxhrc.mongodb.net/mren-app?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log(`database connected successfully`);
    } catch (error) {
        console.log(`error while connecing with database `, error)

    }
}

export default Connection;