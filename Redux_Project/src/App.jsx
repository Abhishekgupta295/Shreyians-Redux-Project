
// import {  fetchGifs, fetchPhotos, fetchVedios } from './API/MediaApi'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectionPages'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div  className="min-h-screen text-white w-full bg-gray-900">
          
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
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage/>} />
          </Routes>
          
      </div>
    </>
  )
}

export default App
