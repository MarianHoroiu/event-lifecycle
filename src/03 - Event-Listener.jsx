import { useEffect } from "react";

export const EventListener = () => {
  useEffect(() => {
    document
      .getElementById("btn2")
      .addEventListener("click", () => handleClick2());
  });

  const handleClick1 = event => {
    console.log("Btn-1: Click event.");
    document.getElementById("div1").style.backgroundColor = randomColor();
  };

  const handleClick2 = event => {
    console.log("Btn-2: Click event.");
    document.getElementById("div2").style.backgroundColor = randomColor();
  };

  return (
    <div id="div1" style={div1Styles}>
      Container-1
      <div id="div2" style={div2Styles}>
        Container-2
        <div>
          <button id="btn1" onClick={handleClick1} style={buttonStyles}>
            Button 1
          </button>
          <button id="btn2" style={buttonStyles}>
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const div1Styles = {
  backgroundColor: "white",
  border: "2px solid red",
  width: "360px",
  padding: "20px",
};

const div2Styles = {
  backgroundColor: "white",
  border: "2px solid green",
  width: "300px",
  padding: "20px",
};

const buttonStyles = {
  margin: "10px",
};
