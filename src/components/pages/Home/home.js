import React from 'react';
import CardColumn from './Cardcomponent/CardColumn';
import Sidebar from './Sidebarcomponet/Sidebar';

import dummydata from '../../../dummydata';

const Home = () => (
  
  <div className="home">
    <div>
      <input />
    </div>
    <div className='same'>
    <Sidebar />
    <CardColumn data={dummydata}/>
    </div>
  </div>
);

export default Home;
