import './index.css'
import Block from './Block'
import Home from './Home'
import Like from './Like'
import SearchBar from './SearchBar'
import TopBar from './TopBar'
import Pagination from './Pagination'

function App() {
  
  
  return (
   
     <div className='flex flex-col gap-3 p-2 h-full w-full'>
        <TopBar></TopBar>
        <div className='grid grid-cols-4 gap-2 justify-center'>
         <Home></Home>
        </div>
        <div>
         <Pagination></Pagination>
        </div>
     </div>
   
  )
}

export default App
