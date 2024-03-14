import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.once("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on('error' , (err) =>  {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit();
    })

  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}