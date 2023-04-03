import React from "react"
import { View } from "react-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import { Routes, Route} from 'react-router-native/dist';
import Login from "../Pages/login";



const Main = () =>{
    return(
        <View style={{ flexGrow: 1}}>
          <AppBar />
          <Routes>
            <Route exact path="/" element={<RepositoryList />}>
              
            </Route>
            <Route path="/signin" element={<Login />}>
          
            </Route>
          </Routes>
        </View>
    )
}

export default Main