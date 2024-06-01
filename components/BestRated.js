import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Animated, {FlipInXDown,
                  FlipOutXDown,
                  PinwheelIn
                 } from 'react-native-reanimated';

const BestRated = (props) => {
  return (
    <Animated.View  
                    entering={FlipInXDown
                                         .delay(100)
                                         .springify()
                                         .damping(30)
                                         .mass(5)
                                         .stiffness(10)
                                         .overshootClamping(false)
                                         .restDisplacementThreshold(0.1)
                                         .restSpeedThreshold(5)
                            } 
                    // exiting={FlipOutXDown.delay(500)}
                    style={styles.bestRatedContainer}>


      <Animated.Text entering={PinwheelIn
                                         .springify()
                                         .damping(2)
                                         .mass(5)
                                         .stiffness(10)
                                         .overshootClamping(false)
                                         .restDisplacementThreshold(0.1)
                                         .restSpeedThreshold(5)
                                        // .delay(500)
                                        
                              } 
                              
                     style={styles.bestRatedText}>BestRated
      </Animated.Text>


    </Animated.View>
  )
}

export default BestRated

const styles = StyleSheet.create({
    bestRatedContainer: {
        width:"95%",
        marginVertical:10,
        paddingVertical:10,
    },
    bestRatedText: {
        fontSize:20,
        fontWeight:"bold",
        borderBottomWidth:1,
    }
})