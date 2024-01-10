// Movie.js
import React from 'react';

const Cards = ({ movie :{release_date,title,poster_path,vote_average} }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie">
<div className="popularity">
  <p>{new Date(release_date).getFullYear()}</p>
</div>
      <div className="poster"><img
  src={poster_path ? `${baseImageUrl}${poster_path}` : "https://via.placeholder.com/400"}
  alt={title}
/>

      </div>
      <div className="details">
        <span>Rating : {vote_average}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
