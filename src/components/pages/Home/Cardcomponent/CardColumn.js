import React, { useState } from 'react';
// import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';


const CardColumn = ({ data }) => {
    console.log(data, 'from dummy data');
    const [count, setCount] = useState({
        prev: 0,
        next: 3
      })
      const [hasMore, setHasMore] = useState(true);
      const [current, setCurrent] = useState(data.slice(count.prev, count.next))

      const getMoreData = () => {
        if (current.length === data.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
          setCurrent(current.concat(data.slice(count.prev + 3, count.next + 3)))
        }, 2000)
        setCount((prevState) => ({ prev: prevState.prev + 3, next: prevState.next + 3 }))
      }

    return (
        <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div>
          {current && current.map(((item, index) => (
            <div key={item.key} className="post">
              <h4>{item.topic}</h4>
              <img src={item.image} alt='img'/>
              <button>Details</button>
            </div>
          )))
          }
        </div>
      </InfiniteScroll>
  )
}

export default CardColumn;