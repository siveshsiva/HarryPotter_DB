const array = [1,2,3,4]

const Pagination=()=>{

    return(
        <div className="flex flex-row gap-1 w-full h-full place-content-center">
            <div className=" flex place-items-center gap-2">
      { array.map(
            (elements)=>{
                return(
                    <button className="h-10 w-20 place-items-center bg-sky-600 rounded-lg">{elements}</button>
                )
            }
            )
      }
      </div>
        </div>
    )

}

export default Pagination