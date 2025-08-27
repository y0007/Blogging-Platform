import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//middleware
app.use(express.json({limit: "16kb"}))          //to parse json data
app.use(express.urlencoded({extended: true}))   //to parse form data
app.use(express.static("public"))               //to serve static files
app.use(cookieParser())                         //to parse cookies

//router import

// router imports
import userRouter from "./routes/user.routes.js"
import protectedRouter from "./routes/protected.routes.js"


// Public routes (e.g., login, register)
app.use("/api/v1/users", userRouter)

// Secure all other API routes
import { verifyJWT } from "./middlewares/auth.middleware.js"
app.use("/api/v1", verifyJWT)

// Example: protected routes
app.use("/api/v1/protected", protectedRouter)

export { app }