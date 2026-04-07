import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name : "Search",
    initialState : {
           query : " ",
           activeTab : "photos",
           results : [],
           loading : false,
           error : null
    },
    reducers : {
           setQuery : (state, action) => { state.query = action.payload },
           setActiveTab : (state, action) => { state.activeTab = action.payload },
           setResults : (state, action) => { state.results = action.payload ; state.loading = false; },
           setLoading : (state, ) => { state.loading = true; state.error = null; },
           setError : (state, action) => { state.error = action.payload; state.loading = false; },
           clearResults : (state) => { state.results = []; state.error = null; }
    }
})

export const { setQuery, setActiveTab, setResults, setLoading, setError, clearResults } = SearchSlice.actions;

export default SearchSlice.reducer;