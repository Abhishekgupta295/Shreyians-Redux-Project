import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../Redux/Features/SearchSlice';


const Tabs = () => {

    const tabs = ['Photos', 'Videos', 'Gifs'];

    const dispatch = useDispatch();
    const currentActiveTab = useSelector((state) => state.search.activeTab);

  return (
    <div>
        {
           tabs.map((tab, idx) => {
                return (
                    <button className={`${currentActiveTab == tab ? 'bg-blue-500 text-white' : 'bg-blue-300 text-blue-950'} transition px-4 py-2 m-4 rounded-md cursor-pointer active:scale-95`}
                      key={idx}
                      onClick={() => {dispatch(setActiveTab(tab))}}
                      >
                        {tab}
                    </button>
                )
            })     

        }
            
        
    </div>
  )
}

export default Tabs