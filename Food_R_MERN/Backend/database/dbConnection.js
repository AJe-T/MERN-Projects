import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("connected to DB Successfully");
    })
    .catch((err) => {
      console.log(`Some error occur while connecting to the database ${err}`);
    });
};
