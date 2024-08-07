import React, { useState, useEffect } from "react";

import "./index.scss";

const Target = (props) => (
  <div
    className="target-container"
    style={props.position}
    onClick={() => props.onClick(props.id)}
  >
    <div
      className="target"
      style={props.style}
      onClick={() => props.onClick(props.id)}
    ></div>
  </div>
);

const Header = (props) => (
  <div className="header">
    <span>{props.score}</span>
    <span>Timeout</span>
  </div>
);

const App = () => {
  const [score, setScore] = useState(0);
  const [сomponents, setComponents] = useState([]);
  const [clickedTarget, setClickedTarget] = useState([]);

  const createSize = () => Math.floor(Math.random() * 50);

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
            backgroundColor:
              "#" + Math.floor(Math.random() * 16777215).toString(16),
            height: size + "px",
            width: size + "px",
          }}
          position={{
            top: "-100px",
            left: Math.floor(Math.random() * 100) + "%",
            height: size + 20 + "px",
            width: size + 20 + "px",
            animationDuration: Math.random() * 6 + "s",
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
    <div className="container">
      <Header score={score} />
      <div className="targets">
        {сomponents.map((comp) =>
          clickedTarget.includes(comp.props.id) ? null : comp
        )}
      </div>
    </div>
  );
};

export default App;
