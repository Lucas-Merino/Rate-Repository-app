import React from "react";
import { Text, FlatList} from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRespositories from "../Hooks/useRepositories.js";

const RepositoryList = () =>{
  
    const {repositories} = useRespositories()

    return(
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem ={({item : repo}) => (
                <RepositoryItem {...repo}/>
            )}
        />
    )
}

export default RepositoryList