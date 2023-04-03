import React from "react"
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback} from "react-native"
import Constants from "expo-constants"
import { Link, useLocation } from "react-router-native/dist"

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "#24292e",
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection: "row",
    },
    text: {
        color: "#999",
        fontWeight: "bold", 
        paddingLeft: 20, 
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: "#fff",
        fontWeight: "bold", 
        paddingLeft: 20, 
    }
})

const AppBarTab = ({ children, to}) => {
    const { pathname } = useLocation()
    const active = pathname == to

    const textStylesActive = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} >
            <Text style={textStylesActive}>{children}</Text>
        </Link>
    )
}

const AppBar = () =>{
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to="/">Repositories </AppBarTab>
                <AppBarTab to="/signin">Sign In </AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar