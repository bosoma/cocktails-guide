import React, { useState, useEffect } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { startCase } from 'lodash'

import DrinksList from 'root/components/drinksList'
import {getDrinks} from 'root/api'

import styles from './styles.js'

const CocktailsScreen = () => {
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState()
  const [search, setSearch] = useState('')

  useEffect( () => {
    getDrinks()
    .then((data) => {
      setData(data)
      setFilteredData(data)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {!data ? 
        <ActivityIndicator size='large' color='#00ff00'/> 
      : 
      <>
        <SearchBar
         lightTheme
          placeholder='Cocktail name..'
          onChangeText={(value) => {
              console.log(value)
              setSearch(value)
              setFilteredData(data.filter( el => el.strDrink.replace(/\d/g, '').trim().startsWith(startCase(value))))
            }
          }
          value={search}
        />
        <DrinksList
          data={filteredData}
        />
      </>
      }
      
    </SafeAreaView>
  );
}

export default CocktailsScreen