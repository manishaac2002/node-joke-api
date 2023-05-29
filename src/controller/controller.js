import { getDiffTypeJokeDataService, getJokeService } from "../service/services.js"

const getJokeController = async (request, response) => {
    const getJokesControllerResponse = await getJokeService(request)
    response.json(getJokesControllerResponse)
}

const getTypeOfJokeController = async (request, response) => {
    const getTypeOfJokeControllerResponse = await getJokeService(request)
    response.json(getTypeOfJokeControllerResponse)
}

const getDiffTypeOfJokeController = async (request, response) =>{
    const getDiffTypeOfJokeControllerResponse =await getDiffTypeJokeDataService(request)
    response.json(getDiffTypeOfJokeControllerResponse)
}

export {
    getJokeController,
    getDiffTypeOfJokeController

}