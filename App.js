import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(
    window.localStorage.getItem('count') || 0


  );
                 
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
      <h1>
        You clicked {count} times  
      </h1>
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
export default Example