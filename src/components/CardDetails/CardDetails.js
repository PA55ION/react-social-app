import React from "react";
import "./CardDetails.css";

const CardDetails = ({ user }) => {
  let birthday = new Date(user.dob.date); //convert date time
  let date = birthday.toLocaleDateString(); //convert date time
  return (
    <section className="profile">
      <div className="profile-card">
        <div className="profile-card-img">
          <img
            className="avatar-img profile-img"
            src={user.picture.large}
            alt={user.name.first}
          />
        </div>
        <div className="profile-body">
          {" "}
          <h1 className="user-name">
            {user.name.first} {user.name.last}{" "}
          </h1>
          <h3 className="user-email">{user.email}</h3>
          <p className="user-info">
            <i className="ri-cake-2-line"></i>
            {date}
          </p>
          <p className="user-info user-address">
            <i className="ri-map-pin-line"></i>
            {user.location.state}, {user.location.country}
          </p>
        </div>
        <div className="profile-detail-card">
          <div className="email-tile">
            <i className="ri-mail-line icon"></i>
            <p className="email">{user.email}</p>
            <p>Username: {user.login.username}</p>
            <p>Password: {user.login.password}</p>
          </div>
          <div className="address-tile">
            <i className="ri-map-pin-line icon"></i>
            <p className="address">
              {user.location.street.number} {user.location.street.name}
            </p>
            <p>
              {user.location.city}, {user.location.state}
            </p>
            <p>
              {user.location.country}, {user.location.postcode}
            </p>
          </div>
          <div className="phone-tile">
            <i className="ri-phone-line icon"></i>
            <p>Cell: {user.cell}</p>
            <p>Mobile: {user.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
