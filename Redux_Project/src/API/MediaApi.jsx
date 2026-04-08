// Here we will bascially fectch the images gifs vedios from the APIS using Axios

import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export async function fetchPhotos  (query, page = 1, per_page = 20)  {

    const res = await axios.get('https://api.unsplash.com/search/photos' , {
        params : { query, page, per_page },
        headers: {Authorization : `Client-ID ${UNSPLASH_KEY}` }
    });
    console.log("response is: ",res)

     return res.data.results;
}

export async function fetchVedios(query , per_page=10)  {

    const res = await axios.get('https://api.pexels.com/v1/videos/search' , {
        params : { query, per_page },
        headers: {Authorization : PEXELS_KEY} 
    });
    console.log("response is: ",res)

     return res.data.videos;
}

export async function fetchGifs(query , limit=20)  {

    const res = await axios.get('https://api.giphy.com/v1/gifs/search' , {
        params : {q : query, limit , api_key : GIPHY_KEY },
       
    });
    console.log("response is: ",res.data)

     return res.data.data;
}

