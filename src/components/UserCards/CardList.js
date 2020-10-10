import React from "react";
import "./CardList.css";
import { Link } from 'react-router-dom';

const CardsList = ({ user, id }) => {
  return (
    <div key={id} className="container">
      <div className="card-deck">
        <div className="card">
          <div className="card-img">
            <img
              className="avatar-img"
              src={user.picture.large}
              alt={user.name.first}
            />
          </div>
          <div className="card-body">
            <h3 className="name" key={id}>
            <Link to={`/user/${user.id.value}`}>
              {user.name.first} {user.name.last}
              </Link>
            </h3>
            <p className="email">{user.email}</p>
  <p className="address">{user.location.city}, {user.location.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsList;
