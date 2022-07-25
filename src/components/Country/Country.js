import React from 'react';
import './Country.css' ;

const Country = ({country}) => {
  console.log(country)
   const {name, capital, flag, population} = country ;
  return (
    <div className='country'>
      <h3>Name: {name}</h3>
      <img src={flag} alt="123" />
      <p>Capital: {capital}</p>
      <p>population: {population}</p>
    </div>
  );
};

export default Country;