#STEP 1
  https://docs.swmansion.com/react-native-reanimated/


#STEP 2
  npx expo install react-native-reanimated


#STEP 3
 babel.config.js add

  plugins: ['react-native-reanimated/plugin'],


#STEP 4

  import Animated, {....} from 'react-native-reanimated';


#USEAGE  

-------------------
    Animated.FlatList
    Animated.Image
    Animated.View
    Animated.ScrollView
    Animated.Text
  -------------------
  Yukarıdaki veriler ise "BAŞLARINA Animated. EKLE"memiz yeterli.


  Aksi Takdirde

  -------------------
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
                                                             Pressable
                                                             ...
                                                             
  -------------------

  #ÖRNEK KULLANIM 

   <Animated.FlatList entering={BounceIn.delay(300)}
                      entering={LightSpeedInRight.delay(100)}
                      entering={FlipInYRight.delay(300)} 
                      exiting={FlipOutYLeft}
                    />
                    
  -------------------
                    
  
