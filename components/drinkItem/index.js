import React, {useState} from 'react'
import { View, Text, Image, Modal, TouchableOpacity, TouchableHighlight } from 'react-native'

import DrinkDetails from 'root/components/drinkDetails'

import styles from './styles.js'


const DrinkItem = ({ id, title, imageUrl }) => {

    const [detailsOpened, setDetailsOpened] = useState(false);

    return (
        <>
            <Modal transparent animationType="slide" visible={detailsOpened} onRequestClose={() => setDetailsOpened(false)}>
                <DrinkDetails id={id} title={title} imageUrl={imageUrl} closeModal={() => setDetailsOpened(false)}/>
            </Modal>
            <TouchableOpacity onPress={()=> setDetailsOpened(true)}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{
                        uri: imageUrl,
                    }}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default DrinkItem
      