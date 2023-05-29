import express from 'express';
import * as dotenv from 'dotenv'
import { getDiffTypeOfJokeController, getJokeController, } from './src/controller/controller.js';
dotenv.config()

const application = express()

application.get('/get-all-joke-from-server', getJokeController)
// application.get('/get-type-of-joke',getTypeOfJokeController)
application.get('/get-diff-type-of-joke/:type',getDiffTypeOfJokeController)

const port = process.env.PORT

application.listen(port, () => {
    console.log(port);
})