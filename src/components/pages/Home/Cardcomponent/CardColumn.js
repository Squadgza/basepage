import React, { useState } from 'react';
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import Emoji from '../../../emoji/emoji';
import uniqid from 'uniqid';


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
      endMessage={<h4>You reached end <Emoji symbol="👌" label="OK" /></h4>}
    >
      <div>
        {current && current.map(((item) => (
          <Card key={uniqid()} data={item} />
        )))
        }
      </div>
    </InfiniteScroll>
  )
}

export default CardColumn;