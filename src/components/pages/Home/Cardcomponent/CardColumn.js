import React from 'react'
import Card from './Card'


const CardColumn = ({ data }) => {
    console.log(data, 'from dummy data');
    return (
    <div>
        { data.map((item) => (
            <Card key={item.key} data={item} />

        ))}
    </div>
  )
}

export default CardColumn;