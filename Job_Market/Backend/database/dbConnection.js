import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_MARKET",
    })
    .then(() => {
      console.log(`Connected to the Database Successfully`);
    })
    .catch((err) => {
      console.log(`some error occurred while connecting to database: ${err}`);
    });
};
