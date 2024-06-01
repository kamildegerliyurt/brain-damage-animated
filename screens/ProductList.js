import { StyleSheet, Text, View,FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {RenderItem, BestRated, OtherRenderItem, SearchBar} from "../components/index"

import Animated, {BounceIn,
                  BounceOut,
                  LightSpeedInLeft,
                  LightSpeedOutLeft,
                  LightSpeedInRight,
                  LightSpeedOutRight,
                } from 'react-native-reanimated';

const ProductList = ({navigation}) => {
//----------------------------------------
const [productData, setProductData]= useState([])

const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])
//----------------------------------------

useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then((res)=> {
        setProductData(res.data)
    })
}, [])
//----------------------------------------
const handleSearchData = (value)=> {
    setSearchData(value)


const filtered = productData.filter((item)=>
   item.title.toLowerCase().includes(searchData.toLowerCase())
)

setFilterList(filtered)

}
//----------------------------------------
const firstProductData = productData.slice(0,10)
const secondProductData = productData.slice(10,20)
//----------------------------------------


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView style={styles.productListContainer}>
        <SearchBar getSearchData={handleSearchData}/>

        <Animated.View entering={LightSpeedInLeft}
                        exiting={LightSpeedOutLeft}
                        style={styles.flatListContainer}>

            <Animated.FlatList  entering={BounceIn} 
                                exiting={BounceOut}
                                data={filterList.length > 0 ? filterList : firstProductData}
                                numColumns={(2)}
                                showsVerticalScrollIndicator={false}
                                alwaysBounceVertical={false}
                                keyExtractor={(item)=> item.id}
                                renderItem={({item})=> {
                                    return(
                                    <RenderItem data={item}/>
                                    )
                                }}/>
        </Animated.View>

        
        <BestRated />

        <Animated.View entering={LightSpeedInRight}
                        exiting={LightSpeedOutRight}
                        style={styles.otherFlatListContainer}>

            <Animated.FlatList entering={BounceIn} 
                                exiting={BounceOut}
                                data={filterList.length > 0 ? filterList : secondProductData}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                alwaysBounceHorizontal={false}
                                keyExtractor={(item)=> item.id}
                                renderItem={({item})=> {
                                    return(
                                        <OtherRenderItem data={item}/>
                                    )
                                }}/>
        </Animated.View>



        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ProductList

const styles = StyleSheet.create({
    productListContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
    },
    flatListContainer: {
        flex:2,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
    },
    otherFlatListContainer: {
        flex:1,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:5,
    }
})