import React, { useState, useEffect } from "react";

import "./index.scss";

//const COLORS = [];

const Target = (props) => {
  const cathTarger = () => {};

  return (
    <div onClick={cathTarger} className="target" style={props.style}></div>
  );
};

const App = () => {
  //const [attempts, setAttempts] = useState(3);
  const [сomponents, setComponents] = useState([]);

  const createSize = () => Math.floor(Math.random() * 50) + "px";

  console.log(window);
  useEffect(() => {
    const intervalComponents = setInterval(() => {
      console.log("kdejkjdwhdwhjhgdwe");
      const size = createSize();
      setComponents((prevComponents) => [
        ...prevComponents,
        <Target
          style={{
            top: "-100px",
            left: Math.floor(Math.random() * 100) + "%",
            backgroundColor:
              "#" + Math.floor(Math.random() * 16777215).toString(16),
            animationDuration: Math.random() * 6 + "s",
            height: size,
            width: size,
          }}
          key={prevComponents.length + 1}
        />,
      ]);
    }, 3000);

    console.log(сomponents);

    return () => {
      // This is the cleanup function
      // It will be called when the component is unmounted
      clearTimeout(intervalComponents);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">{сomponents}</header>
    </div>
  );
};

export default App;
