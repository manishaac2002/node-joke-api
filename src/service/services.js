import { getDataFromServer, getTypeOfJokeDataFromServer } from "./axios_services/axios.service.js"

const getJokeService = async (request) => {
    const jokeUrl = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json"
    try {
        const getValues = await getDataFromServer(jokeUrl)
        return getValues
    } catch (error) {
        console.log(error);
    }
}

const getTypeOfAllJokeService = async(request)=>{
    const jokeUrl = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json"
    try {
        const getValues = await getTypeOfJokeDataFromServer(jokeUrl)
        return getValues
    } catch (error) {
        console.log(error);
    }
}

export {
    getJokeService,
    getTypeOfAllJokeService
}