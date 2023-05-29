import { getDataFromServer } from "./axios_services/axios.service.js"

const getJokeService = async (request) => {
    const jokeUrl = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json"
    try {
        const getValues = await getDataFromServer(jokeUrl)
        return getValues
    } catch (error) {
        console.log(error);
    }
}

const getDiffTypeJokeDataService = async (request) => {
    try {
        const jokeUrl = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json"
        const response = await getDataFromServer(jokeUrl) 
        const type =request.params.type
        console.log(type);

        const filteredArray = response.filter(obj => obj.type === type)

        // const responseData = response.data
       
        return filteredArray
    } catch (error) {
        console.log(error);
    }
}
export {
    getJokeService,
    getDiffTypeJokeDataService
}