import React from 'react'
import Cards from '../components/Card/Cards';


const Home = () => {
    return (
      <div 
      style={{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      height:'150.1vh'
      }}
      >
        <Cards/>
      </div>
    );
  };

export default Home;