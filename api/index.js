import axios from "axios"

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'

const getDrinks = async (category = 'Cocktail') => {
    try {
      const response = await axios.get(`${baseUrl}/filter.php?c=${category}`)
      return response.data.drinks
    } catch (error) {
      console.log('ERROR:', error.message)
    }
}

const getDrinkDetails = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/lookup.php?i=${id}`)
      return response.data.drinks[0]
    } catch (error) {
      console.log('ERROR:', error.message)
    }
}


export {getDrinks, getDrinkDetails}