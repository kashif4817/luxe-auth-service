// index.js
import express from 'express'
import dotenv from 'dotenv'
<<<<<<< HEAD
import cors from 'cors'
=======
// import db from './config/db.js'
// import routes from './routes/authRoutes.js';
>>>>>>> 22be10d6f065883ada81fbf96d7ece494df7a5cf
import routes from './routes/authRoutes.js'

const app = express();
app.use(express.json());
<<<<<<< HEAD
app.use(cors())
=======
>>>>>>> 22be10d6f065883ada81fbf96d7ece494df7a5cf
app.use('/api/auth', routes)
dotenv.config();
// db();


app.get("/", (req, res) => {
    res.send("Wellcome from backend")
})
const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});


