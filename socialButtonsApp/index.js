function Button(props) {
  //   Write your code here.
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
}

const element = (
  //   Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-btn" />
        <Button buttonText="Comment" className="comment-btn" />
        <Button buttonText="Share" className="share-btn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
