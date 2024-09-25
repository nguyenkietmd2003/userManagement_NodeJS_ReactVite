import express from "express";
import cors from "cors";
import { connection } from "./src/config/database.js";
import { configEngine } from "./src/config/viewEngine.js";
import apiRouter from "./src/routes/api.js";
//

const app = express();
const port = process.env.PORT || 8888;
//

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//

configEngine(app);

///

///

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error to connect to DB : " + error);
  }
})();

app.use(apiRouter)
