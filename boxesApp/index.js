function Box(props) {
  // Write your code here.
  const { className, textMessage } = props;

  return (
    <div className={className}>
      <p className="box-title">{textMessage}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="boxes-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-card">
      <Box className="orange-box" textMessage="Small" />
      <Box className="blue-box" textMessage="Medium" />
      <Box className="pink-box" textMessage="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
