import React, { useState } from 'react';
import './App.css';
import { data } from './data';
import List from './List';

const App = () => {
  const [dataStore, setDataStored] = useState(data);
  return (
    <section className='container'>
      <h3 className='center'>{dataStore.length} birthDays today</h3>
      {dataStore.map((dataItem) => {
        return <List {...dataItem} />;
      })}

      <div class='center'>
        <button className='clearButton' onClick={() => setDataStored([])}>
          Clear All Users
        </button>
      </div>
    </section>
  );
};

export default App;
