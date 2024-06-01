import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const OtherRenderItem = (props) => {
//-------------------------------
const data = props.data
const title = data.title
const image = data.image
//-------------------------------

const navigation = useNavigation();
//-------------------------------
const otherHandleButton = ()=> {
    navigation.navigate("ProductDetails",
        {
            data: props.data
        }
    )
}
//-------------------------------


  return (
    <View style={styles.otherRenderContainer}>
        <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.otherButtonContainer]}
                   onPress={otherHandleButton}>
            <Image style={{width:100, height:100, resizeMode:"center"}}
                source={{uri: image}}/>
            <Text style={styles.otherRenderText} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
        </Pressable>
    </View>
  )
}

export default OtherRenderItem

const styles = StyleSheet.create({
    otherRenderContainer: {
        margin:15,
        width:150,
        alignItems:"center",
        justifyContent:"center",
    },
    otherRenderText: {
        borderWidth:2,
        marginTop:5,
        textAlign:"center",
        padding:5,
        fontSize:20,
        fontWeight:"bold",
        borderRadius:10,
    },
    otherButtonContainer: {
        alignItems:"center",
        justifyContent:"center",
    }
})