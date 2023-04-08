import './index.css'

const array = [1,2,3,4,5,6,7,8]

const BlockSkeleton = ()=>{
   
    return (
        array.map(
            (element)=>{
                return (
                    <div className="grid  w-full border p-4 gap-2" key={element}>
                        <div className='grid h-40 justify-center'>
                            <div className=' h-40 w-40 animate-pulse bg-gray-300'></div>
                        </div>

                        <div className='h-20 justify-start overflow-hidden animate-pulse'>
                            <div className='w-full h-3 bg-gray-300 rounded-lg mt-1'></div>
                            <div className='w-full h-3 bg-gray-300 rounded-lg mt-2'></div>
                            <div className='w-full h-3 bg-gray-300 rounded-lg mt-2'></div>
                        </div>
                    </div>
                )
            }
        )
    )
}


export default BlockSkeleton