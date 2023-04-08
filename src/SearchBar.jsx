import { useState } from "react"

const SearchBar = () => {

    const [isSuggestionValid, setSuggestionValid] = useState(false)

    return (
        <div className="basis-3/6 w-full h-full">
        <form className="flex flex-row w-full h-full place-items-center">
            <div className=" basis-9/12 w-full h-12">
                <input type={"text"}  placeholder="SEARCH" className="w-full p-2 h-12 rounded-l-lg placeholder:text-center"></input>
             {   isSuggestionValid && <div className="absolute z-10 bg-black h-12 w-2/6 mr-2 mt-1 ml-2 rounded-lg bg-green-100"> 
                    
                </div> }
            </div>
            <input type={"submit"} value={"SEARCH"} className="bg-sky-500 h-12 rounded-r-lg w-9 basis-1/3"></input>
        </form>
        </div> 
    )

}

export default SearchBar