import React from 'react';
import CardColumn from './Cardcomponent/CardColumn';
import Sidebar from './Sidebarcomponet/Sidebar';

import dummydata from '../../../dummydata';
import './home.css';

const Home = () => (

  <div className="home">
    <div>
      <input />
    </div>
    <div className='grid1'>
      <Sidebar />
      <CardColumn data={dummydata} />
    </div>
  </div>
);

export default Home;
