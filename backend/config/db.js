import mongoose from "mongoose";

export const connnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://saalim192:aqueel192@cluster0.o3mqflx.mongodb.net/noshnow-del"
    )
    .then(() => console.log("DB Connected"));
};
