import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}


const CollectionSlice = createSlice({
    name : "collection",
    initialState,
    reducers : {
              addToCollection : (state, action) => 
                { 
                   const alreadyExists = state.items.find(
                   item => item.id === action.payload.id )
                    if (!alreadyExists) {
                        state.items.push(action.payload);
                        localStorage.setItem('collection', JSON.stringify(state.items))
                    }
                 }, 
              removeFromCollection : (state, action) => { 
                        console.log('removed');
            
                        state.items = state.items.filter(
                            item => item.id !== action.payload
                        )
                        console.log(state.items);
                        
                        localStorage.setItem('collection', JSON.stringify(state.items))
            },
              clearCollection: (state) => {
                        state.items = []
                        localStorage.removeItem('collection')
             },

              addedToast: () => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
    }}
})

export const {addToCollection, removeFromCollection, clearCollection, addedToast, removeToast} = CollectionSlice.actions
export default CollectionSlice.reducer