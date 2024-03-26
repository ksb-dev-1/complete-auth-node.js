import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import "express-async-errors";
// express

dotenv.config();

const app = express();
// to parse JSON requests sent from client
app.use(express.json());
// to parse cookies sent from client
app.use(cookieParser(process.env.JWT_SECRET));
// to log HTTP requests to terminal
app.use(morgan("tiny"));
// to upload files
app.use(fileUpload({ useTempFiles: true }));
// rest of the packages

// database
import connectDB from "./db/connect.js";

//  routers
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// middleware
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static("./public"));
app.use(fileUpload());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
