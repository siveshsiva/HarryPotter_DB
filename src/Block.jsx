import { useEffect, useState } from 'react'
import './index.css'
import useBackendStorage from './useLocalStorage'
import useLocalStorageage from './useLocalStorage'
import localStorage from './useLocalStorage'


const characterData = {
    id: null,
    name: null,
    image: null,
    like: false,
    slug: null
}

const arrangeData = (data)=>{
    const arrangedData = data.map((element)=>{
           return {...characterData, id:element.id, name: element.attributes.name, image: element.attributes.image}
    })
    return arrangedData
}


const Block = ({children})=>{

    
    const [data, setData] = useState(arrangeData(children))
    useBackendStorage(data)

    const likeHandler = (id)=>{
      const newData = data.map((element)=>{
            if(element.id == id){
                if( element.like == false)
                {
                return {...element,like:true}
                }
                return {...element,like:false}
            }
            else{
            return element
            }
       })
       console.log(newData)
       setData(newData)
    }

    return (
        data.map(
            (element)=>{
                return (
                    <div className="grid border p-4 gap-1" key={element.id}>
                        <div className='grid h-40 place-content-center'>
                            { element.image != null ?
                            <img src={element.image} className='p-2 h-40 w-40 bg-emerald-700' ></img>:
                            <img src={"https://potterdb.com/images/missing_character.svg"} className='p-2 h-40 w-40 bg-emerald-700' ></img>
                            }
                        </div>

                        <div className='h-20 overflow-hidden w-full grid place-content-center'>
                            <div>
                                <h1 className=' font-extrabold font-sans'>{element.name.toUpperCase()}</h1>
                            </div>
                        </div>

                        <div className='grid h-10 bg-neutral-300 place-content-center rounded-lg'>
                            <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={ element.like ? "red" : "white"} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6" onClick={()=>likeHandler(element.id)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        </div>
                        </div>
                    </div>
                )
            }
        )
    )
}


export default Block