import React from 'react'
import { FlatList } from 'react-native'

import DrinkItem from 'root/components/drinkItem'


const DrinksList = ({data}) => {
    const renderItem = ({ item }) => (
        <DrinkItem id={item.idDrink} title={item.strDrink} imageUrl={item.strDrinkThumb} />
    )

    return (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.idDrink}
      />
    )
}


export default DrinksList