
// import {  fetchGifs, fetchPhotos, fetchVedios } from './API/MediaApi'
import './App.css'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

function App() {
  

  return (
    <>
      <div className='h-screen w-full text-white bg-gray-900'>
          <h1>Redux Pro</h1>
          {/* <button className='bg-blue-300 px-4 py-2 m-4 rounded-md' 
              onClick={async() => {
              const data = await fetchPhotos('cat')
                
              console.log(data)
            }}>
              Get Photos
          </button>


          <button
              className='bg-blue-300 px-4 py-2 m-4 rounded-md ' 
              onClick={async() => {
              const data = await fetchGifs('cat')
              
              console.log(data)
              }}
          >Get Gifs
          </button>

          <button
              className='bg-blue-300 px-4 py-2 m-4 rounded-md ' 
              onClick={async() => {
              const data = await fetchVedios('cat')
              
              console.log(data)
              }}
          >Get Videos
          </button> */}
          <SearchBar />
          <Tabs/>
      </div>
    </>
  )
}

export default App
