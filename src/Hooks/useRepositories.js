import React, {useState, useEffect} from "react";

const useRespositories = () =>{
    const [repositories, setRepositories] = useState(null);

    const fetchedRespositories = async () => {
        const res = await global.fetch("http://192.168.0.10:5000/api/repositories")
        const json = await res.json()
        setRepositories(json)
    }

    useEffect(() =>{
        fetchedRespositories()
    }, [])

    const respositoriesNodes = repositories ?
        repositories.edges.map(edge => edge.node) : []

    return { repositories : respositoriesNodes }    
}

export default useRespositories
