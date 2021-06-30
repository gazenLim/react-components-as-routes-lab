import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ul><strong>Movies</strong></ul>
          {actor.movies.map(movie =>{
            return <li>{movie}</li>
          })}
          <hr/>
        </div>
        
      })}
      
    </div>
  );
};

export default Actors;
