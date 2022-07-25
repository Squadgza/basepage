import React from 'react'

const Card = ({ data }) => {
  console.log(data, 'single card');
  return (
    <div >
          <h4>
          {data.topic}
          </h4>
          <img src={data.image} alt='img'/>
          <button>Details</button>
   
    </div>
  )
}

export default Card;