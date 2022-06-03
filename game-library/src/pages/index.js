import React from 'react'
import Cards from '../components/Card/Cards';


const Home = () => {
    return (
      <div 
      style={{
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50px',
        height:'210vh'
      }}
      >
        <Cards/>
      </div>
    );
  };

export default Home