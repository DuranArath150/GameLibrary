import React from 'react'
import Cards from '../components/Card/Cards.js';

const About = () => {
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
        <Cards></Cards>
    </div>
  );
};

export default About