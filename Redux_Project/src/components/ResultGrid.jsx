import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPhotos, fetchGifs, fetchVedios} from '../API/MediaApi'
import { setQuery, setError, setLoading,setResults } from '../Redux/Features/SearchSlice'
import ResultCard from './ResultCard'


//MY Code

const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((OurStore) => OurStore.search);

    const dispatch = useDispatch();
    
    const getData = async () => {
        
        let UIdata = [];

        if (!query.trim()) {
            console.log("Query is empty");
            return;
            }

        try{

                dispatch(setLoading());

                if(activeTab === 'Photos')
                {
                    let data = await fetchPhotos(query);
                    let finalData = data.map((item) => ({
                        id : item.id,
                        type : "photo",
                        title : item.alt_description,
                        thumbnail : item.urls.thumb,
                        src : item.urls.full,
                        url : item.links.html
                    }))
                    console.log("Final Photo Data:", finalData[0]);
                    UIdata = finalData;
                    
                }   

                else if(activeTab === 'Gifs')
                {
                   let data = await fetchGifs(query);
                    let finalData = data.map((item) => ({
                        id : item.id,
                        type : "Gif",
                        title : item.title,
                        thumbnail : item.images.fixed_height_small.webp || 'NOT FOUND',
                        src : item.url




                    }))
                    console.log("Final GIF Data:", finalData[0]);
                    UIdata = finalData;
                    
                }
             
                else if(activeTab === 'Videos')
                {
                   let data = await fetchVedios(query);
                    let finalData = data.map((item) => ({
                        id : item.id,
                        type : "video",
                        title : `Video Shot by ${item.user.name}`,
                        thumbnail : item.image,
                        src : item.video_files[1].link


                    }))
                    console.log("Final Video Data:", finalData[0]);
                    UIdata = finalData;
                }

             dispatch(setResults(UIdata));
        } 
        catch(error){
            console.error(error)
            dispatch(setError(error.message));
        }
    }
  
    useEffect(() => {
        getData();
    },[query, activeTab])

    if(error) return <div className='text-red-500 text-center mt-10'>Error: {error}</div>
    if(loading) return <div className='text-blue-500 text-center mt-10'>Loading...</div>
  return (
    <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
        {
            results.map((item) => (
                 <div key={item.id}>
                    <ResultCard item = {item} />
                </div>
            ))
        }

    </div>
  )
}

export default ResultGrid