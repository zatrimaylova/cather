import React, { useState, useEffect } from "react";

import "./index.scss";

const Target = (props) => (
  <div
    onClick={() => props.onClick(props.id)}
    className="target"
    style={props.style}
  ></div>
);

const App = () => {
  const [score, setScore] = useState(0);
  const [сomponents, setComponents] = useState([]);
  const [clickedTarget, setClickedTarget] = useState([]);

  const createSize = () => Math.floor(Math.random() * 50) + "px";

  const handleScore = (id) => {
    setScore((prevScore) => prevScore + 1);
    setClickedTarget((prevCickedTarget) => [...prevCickedTarget, id]);
  };

  useEffect(() => {
    const intervalComponents = setInterval(() => {
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
          onClick={handleScore}
          score={score}
          id={prevComponents.length + 1}
        />,
      ]);
    }, 300);

    return () => {
      // This is the cleanup function
      // It will be called when the component is unmounted
      clearTimeout(intervalComponents);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {сomponents.map((comp) =>
          clickedTarget.includes(comp.props.id) ? null : comp
        )}
      </header>
    </div>
  );
};

export default App;
