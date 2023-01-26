export const PreventDefault = () => {
  const handleClick = event => {
    // event.preventDefault();
    // alert("Inside the handleClick function.");
    // window.location.href = "https://apple.com";
  };

  return (
    <a href="http://google.ro" onClick={handleClick}>
      My Link to Google Romania
    </a>
  );
};
