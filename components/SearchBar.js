import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
//--------------------------
const search = props.getSearchData


  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.textInputContainer}
                 placeholder='Search...'
                 placeholderTextColor={"gray"}
                 onChangeText={search}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
        borderWidth:2,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:5,
        paddingVertical:5,
        borderRadius:10,
    },
    textInputContainer: {
       fontSize:18,
       fontWeight:"bold",
    }
})