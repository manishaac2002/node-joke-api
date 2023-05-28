import { getJokeService, getTypeOfAllJokeService } from "../service/services.js"

const getJokeController = async (request, response) => {
    const getJokesControllerResponse = await getJokeService(request)
    response.json(getJokesControllerResponse)
}

const getTypeOfJokeController = async (request, response) => {
    const getTypeOfJokeControllerResponse = await getTypeOfAllJokeService(request)
    response.json(getTypeOfJokeControllerResponse)
}

export {
    getJokeController,
    getTypeOfJokeController

}