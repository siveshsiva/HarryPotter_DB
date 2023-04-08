import { useEffect, useState } from "react"
import Block from "./Block"
import BlockSkeleton from "./BlockSkeleton"

const BASE_URL = "https://api.potterdb.com/v1/characters?page[number=2]&page[size=8]"

const fetchDetails = async (url) => {
        const data = await (await fetch(url)).json()
        return data
}

const Home = () => {

    const [url,setUrl] = useState(BASE_URL)
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
    
    setLoading(true)
    setTimeout(()=>{
    fetchDetails(BASE_URL).then(  
        res => {
            setData(()=>{
                 return [...res.data]
            })
                console.log("Home is Loading")
                setLoading(false)
        }
    )
    },5000)
    
    },[url])

    return (
        <>
    {isLoading && <BlockSkeleton></BlockSkeleton>}
   { !isLoading && <Block>{data}</Block>}
    </>
    )
}

export default Home





