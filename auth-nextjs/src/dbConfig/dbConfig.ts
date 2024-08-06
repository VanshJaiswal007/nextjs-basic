import mongoose from "mongoose"

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('mongodb connected successfully');
        })
        connection.on('error',()=>{
             console.log('MongoDB connection error');
        })
    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}