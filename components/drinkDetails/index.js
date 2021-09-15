import React, {useEffect, useState} from 'react'
import { View, Text, Image, ActivityIndicator, Button } from 'react-native'

import {getDrinkDetails} from 'root/api'

import styles from './styles.js'


const DrinkDetails = ({ id, title, imageUrl, closeModal }) => {

    const [data, setData] = useState()

    useEffect( () => {
        getDrinkDetails(id)
      .then((data) => {
        setData(data)
      })
    }, [])

    if (!data) return <ActivityIndicator size="large" color="#00ff00"/>

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{
                uri: imageUrl,
            }}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{data.strInstructions}</Text>
            <View style={styles.button}>
                <Button title='Ok!' onPress={()=> closeModal()}/>
            </View>
        </View>
    )
}

export default DrinkDetails