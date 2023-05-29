import axios from 'axios';


const getDataFromServer = async (url) => {
    try {
        const response = await axios.get(url)
        const responseData = response.data
        return responseData
    } catch (error) {
        console.log(error);
    }
}
const getTypeOfJokeDataFromServer = async (url) => {

    try {
        const response = await axios.get(url)
        const responseData = response.data
        const filteredArray = responseData.filter(obj => obj.type === 'programming')
        return filteredArray
    } catch (error) {
        console.log(error);
    }
}


export {
    getDataFromServer,
    getTypeOfJokeDataFromServer,
    
}