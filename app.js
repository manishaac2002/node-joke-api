import express from 'express';
import * as dotenv from 'dotenv'
import { getJokeController, getTypeOfJokeController } from './src/controller/controller.js';
dotenv.config()

const application = express()

application.get('/get-all-joke-from-server', getJokeController)

application.get('/get-type-of-joke',getTypeOfJokeController)

const port = process.env.PORT

application.listen(port, () => {
    console.log(port);
})