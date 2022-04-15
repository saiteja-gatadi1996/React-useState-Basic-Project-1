import React from 'react';

const List = ({ id, name, age, image }) => {
  return (
    <div className='details' key={id}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default List;
