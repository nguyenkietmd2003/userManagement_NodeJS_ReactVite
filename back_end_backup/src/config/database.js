import mongoose from "mongoose";
const dbState = [
  {
    value: 0,
    label: "Disconnect",
  },
  {
    value : 1,
    label: "Connected",
  },
  {
    value : 2,
    label: "Connecting",
  },
  {
    value : 3,
    label: "Disconnecting",
  },
];


export const 
 connection = async()=>{
    await mongoose.connect(process.env.MONGO_DB_URL)
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, " to database MongoDB")

} 


