import js from '@eslint/js';
import React from 'react'

const ResultCard = ({item}) => {
 
  const addToCollection = (item) => {
     console.log("Adding to collection:", item);
     const olddata = JSON.parse(localStorage.getItem('collection')) || [];
     console.log("Old Collection Data:", olddata);
     const newdata = [...olddata, item];
     console.log("New Collection Data:", newdata);
     localStorage.setItem('collection', JSON.stringify(newdata));
  }


  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a target='_blank' className='h-full' href={item.url}>
            <div>
                { item.type === "photo" ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title} /> : "" }
                { item.type === "video" ? (<video className='h-full w-full object-cover object-center'  src={item.src} autoPlay loop muted />) : "" }
                { item.type === "Gif" ? (<img className='h-full w-full object-cover object-center'  src={item.src} alt={item.title} />) : ""}
            </div>
         </a>   
       <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
             <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
             
                <button
                    onClick={() => {
                        addToCollection(item);
                    }}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>

       </div>
      
    </div>
  )
}

export default ResultCard