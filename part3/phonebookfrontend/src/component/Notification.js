const Notification = ({ mess, isError }) => {
  if (mess === null) {
    return null;
  }
  let className;
  if (isError === true) className = "error";
  else className = "notice";
  return <div className={className}>{mess}</div>;
};

export default Notification;
