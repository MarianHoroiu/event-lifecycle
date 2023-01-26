export const StopPropagation = () => {
  const handleClick1 = event => {
    // event.stopPropagation();
    console.log("Btn-1: Click event.");
  };

  const handleClick2 = event => {
    // event.stopPropagation();
    console.log("Btn-2: Click event.");
  };

  return (
    <div onClick={() => console.log("Click on Container 1")} style={div1Styles}>
      Container-1
      <div
        onClick={() => console.log("Click on Container 2")}
        style={div2Styles}>
        Container-2
        <div>
          <button onClick={handleClick1} style={buttonStyles}>
            Button 1
          </button>
          <button onClick={handleClick2} style={buttonStyles}>
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

const div1Styles = { border: "2px solid red", width: "360px", padding: "20px" };

const div2Styles = {
  border: "2px solid green",
  width: "300px",
  padding: "20px",
};

const buttonStyles = { margin: "10px" };
