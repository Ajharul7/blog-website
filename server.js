import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


const app = express();
DotEnv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "./frontend/build")));
  let url = path.join(__dirname, "./frontend/build", "index.html");
  app.get("*", (req, res) => {
    res.sendFile(url);
  });


const PORT = process.env.PORT || 8000;



Connection(`mongodb+srv://ajharul7:ajharul1234@cluster0.c94fagc.mongodb.net/?retryWrites=true&w=majority`);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
