import React from 'react'

const SidebarCard = ({ data }) => {

  return (
    <div>
        <h3>{data.heading}</h3>
        <div>      
                {data.lists.map((item, index) => (
                    <div key={item.title} >
                        <a href={item.link}>{item.title}
                        </a>
                        <p>{item.count}</p>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default SidebarCard;