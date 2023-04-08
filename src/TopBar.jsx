import Like from "./Like"
import SearchBar from "./SearchBar"
import Title from "./Title"

const TopBar = () => {


    return (
        <div className="flex flex-row h-20 w-full bg-green-200 shadow-xl place-items-center gap-2 p-1">
            <Title></Title>
            <SearchBar></SearchBar>
            <Like></Like>
        </div>
    )

}

export default TopBar