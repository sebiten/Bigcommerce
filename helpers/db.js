import mongoose from "mongoose";
const connection = {};

 async function dbConnect() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Already connected to MongoDB");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection to MongoDB");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("New connection created to MongoDB");
  connection.isConnected = db.connections[0].readyState;
}

 async function dbDisconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected");
    }
  }
}

const db = { dbConnect, dbDisconnect };
export default db;
