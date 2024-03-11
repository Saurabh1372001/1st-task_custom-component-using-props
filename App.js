import React from 'react';
import './App.css';
// import { useState } from 'react';

import MyComponent from './Components/Props';


function App() {
  // const [name, setName] = useState('');

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <div className="App">
      <MyComponent name="Saurabh" title="React-developer" />

      <hr/>

      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}/>
      {name && <MyComponent name={name} title="React-developer" />} */}

    </div>
  );
}

export default App;
