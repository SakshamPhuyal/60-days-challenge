import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('Component mounted ✅');
  }, []); 
  return <h1>#60DaysChallenge</h1>;
};

export default Component;
