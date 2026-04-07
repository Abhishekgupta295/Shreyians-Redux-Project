import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../Redux/Features/SearchSlice';

const SearchBar = () => {


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form is submittteeddd bhai log !!');
        console.log( searchText);
        dispatch(setQuery(searchText));
        setSearchText('');
    }

    const [searchText , setSearchText] = useState('');

    const dispatch = useDispatch();

  return (
    <div>
        <form className='flex gap-5 p-10 bg-blue-800 rounded-md ' onSubmit={(e) => {submitHandler(e)}}>
             <input 
                type="text" 
                placeholder='Search Anything Here...' 
                className='px-4 py-2 rounded-md bg-cyan-100 text-black w-full'
                required 
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value);  }}
            />

            <button className='bg-blue-300 px-4 py-2 text-blue-950 rounded-md cursor-pointer active:scale-95 '>
                Search
            </button>
        </form>
       
    </div>
  )
}

export default SearchBar