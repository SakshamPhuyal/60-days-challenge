import React, { useRef } from 'react';


function UseRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h2>useRef Hook Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        className="input-field"
      />
      <button onClick={handleFocus} className="focus-button">
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;
