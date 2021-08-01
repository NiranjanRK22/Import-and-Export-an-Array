function Notification(props) {
  // Write your code here.
  const { className, url, message } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={url} />
      <p className="message">{message}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="notifications-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
