import React from "react";
import { Image, View, StyleSheet, Text } from "react-native"

const parseThousands = value =>{
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryItem = (props) => {
    return (
    <View key={props.id} style={styles.container}>
        <View style={{flexDirection: "row", paddingBottom: 3, alignItems: "center"}}>
          <View style={{ paddingLeft: 10 }}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={[styles.bold, styles.big]}>{props.fullName}</Text>
            <Text style={[styles.text, styles.bold]}>{props.description}</Text>
            <Text style={[styles.text, styles.blue]}>{props.language}</Text>
          </View>
        </View>
        
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
          <View>
            <Text style={[styles.bold, styles.text]}>Stars:</Text>
            <Text style={[styles.small, styles.text]}>{parseThousands(props.stargazersCount)}</Text>
          </View>
          <View>
            <Text style={[styles.bold, styles.text]}>Forsk:</Text>
            <Text style={[styles.small, styles.text]}>{parseThousands(props.forksCount)}</Text>
          </View> 
          <View>
            <Text style={[styles.bold, styles.text]}>Review:</Text>
            <Text style={[styles.small, styles.text]}>{props.reviewCount}</Text>
          </View>
          <View>
            <Text style={[styles.bold, styles.text]}>Rating:</Text>
            <Text style={[styles.small, styles.text]}>{props.ratingAverage}</Text>
          </View>
        </View>
    </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15, 
        paddingBottom: 5, 
        paddingTop: 20,
    },
    text: {
        fontSize: 12, 
        color: "grey",
    },
    bold: {
        fontWeight: "bold",
    },
    blue: {
        padding: 4,
        color: "white",
        backgroundColor: "#09f",
        padding: 4, 
        alignSelf: "flex-start",
        borderRadius: 4,
        overflow: "hidden",
        marginVertical: 4, 
    },
    big: {
        fontSize: 20, 
    },
    small: {
        fontSize: 10,
        textAlign: "center", 
    },
    image: {
      width: 52, 
      height: 52,
      borderRadius: 4, 
      marginRight: 15, 
    
    }

})

export default RepositoryItem