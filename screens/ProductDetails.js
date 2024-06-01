import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';



import Animated, { PinwheelIn,
                   RollInLeft,
                   StretchInX,
                   SlideInRight,
                   SlideInLeft,
                  } from 'react-native-reanimated';
                  



const ProductDetails = ({route, navigation}) => {
//---------------------------  
  const PressableView = Animated.createAnimatedComponent(Pressable);
//---------------------------
const total = route.params.data
const title = total.title
const description = total.description
const price = total.price
const image = total.image
//---------------------------
const [number, setNumber] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)
//-----------------------------------AZALT
const handleMinus = () => {
  if (number > 0) {
    setNumber(number - 1)
    setTotalPrice(totalPrice - price)
  }
}
//-----------------------------------ARTTIR
const handlePlus = () => {
  if (number < 10) {
    setNumber(number + 1)
    setTotalPrice(totalPrice + price)
  }
}
 //-----------------------------------


  return (
    <View style={styles.productDetailsContainer}>

     <Animated.Image style={{width:100, height:100, resizeMode:"center"}}
                    source={{uri: image}}
                    entering={RollInLeft.springify().damping(30).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)}/>


            <Animated.Text entering={PinwheelIn.springify().damping(2).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)} 
                           style={styles.bestRatedText}>{title}
            </Animated.Text>

            <Animated.Text entering={PinwheelIn.springify().damping(2).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)} 
                           style={styles.bestRatedText}>{description}
            </Animated.Text>




            <View style={styles.topContainer}>

              <PressableView entering={SlideInRight.springify().damping(30).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)}
                             style={{ alignItems: "center", justifyContent: "center" }}
                             onPress={handleMinus}>
                <AntDesign name="minuscircleo" size={22} color="black" />
              </PressableView>




              <Animated.Text entering={PinwheelIn.springify().damping(2).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)} 
                             style={{ fontSize: 16, fontWeight: "bold" }}>{number}
              </Animated.Text>



              <PressableView entering={SlideInRight.springify().damping(30).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)}
                             style={{ alignItems: "center", justifyContent: "center" }}
                             onPress={handlePlus}>
                <AntDesign name="pluscircleo" size={22} color="black" />
              </PressableView>

            </View>




            <View style={{ width:"50%",alignItems:"center", justifyContent:"space-between", marginTop:20, }}>
               <Animated.Text entering={StretchInX.springify().damping(30).mass(5).stiffness(10).overshootClamping(false).restDisplacementThreshold(0.1).restSpeedThreshold(5)}
                     style={{fontSize:20, fontWeight:"bold"}}>Total Price: {totalPrice.toFixed(2)}</Animated.Text>
            </View>

            


    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  bestRatedText:{
    textAlign:"center",
    marginVertical:5,
  },
  topContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
})