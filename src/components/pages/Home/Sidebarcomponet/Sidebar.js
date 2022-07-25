import React from 'react'
import SidebarCard from './SidebarCard';

const data = [{
    heading:'Category',
    lists:[{title:'Busniess & services',count:'2',  link: 'https://kigalifinder.com/listing-category/business-services/'}, {title:'Health & Lifestyle',count:'3', link:'https://kigalifinder.com/listing-category/health-lifestyle/'}]
},{
    heading:'Location',
    lists: [{title: 'Abroad', count:'2', link: 'https://kigalifinder.com/listing-location/abroad/'}, {title: 'East', count:'4', link: 'https://kigalifinder.com/listing-location/east/'}]
}]

const Sidebar = () => {
  return (    
    <div className='flex-col'>
        {data.map((item) =>(
            <SidebarCard key={item.heading} data={item}/>

        ))}
    {/* <SidebarCard data={data[1]}/> */}
    <h4>Apply Filters</h4>
    </div>
    
  )
}

export default Sidebar;