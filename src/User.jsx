import PropTypes from "prop-types";
import { useState } from "react";

const User = ({ name, place, desc, status, skill }) => {
  let [checkStatus, setCheckStatus] = useState(false);
  const forFollow = () => {
    setCheckStatus(!checkStatus);
  };
  return (
    <div className="container">
      <span className={status ? "status online" : "status"}>
        {status ? "ONLINE" : "OFFLINE"}
      </span>
      <img src="spidy.jpg" alt="" />
      <h3>{name}</h3>
      <h3>{place}</h3>
      <p>{desc}</p>
      <div className="btn">
        <button className="message">Message</button>
        <button
          onClick={forFollow}
          className={checkStatus ? "message follow" : "message"}
        >
          {checkStatus ? "Following" : "Follow"}
        </button>
      </div>
      <div className="skills">
        <h5>skills</h5>
        <ul>
          {skill.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  skill :PropTypes.arrayOf(PropTypes.string).isRequired
};

export default User;