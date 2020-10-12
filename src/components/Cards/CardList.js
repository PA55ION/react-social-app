import React from "react";
import "./CardList.css";
import { Link } from "react-router-dom";
import {
  CardDeck,
  Text,
  Name,
} from "./CardListStyle";

const CardsList = ({ user, id }) => {
  return (
    <div className='main-container'>
      <CardDeck className="card-deck">
        <div className="card">
          <div className="card-img">
            <Link to={`/user/${user.id.value}`}>
              <img
                className="avatar-img"
                src={user.picture.large}
                alt={user.name.first}
              />
            </Link>
          </div>
          <div className="card-body">
              <Link to={`/user/${user.id.value}`}>
              <Name>{user.name.first} {user.name.last}</Name>
              </Link>
            <Text className="email">{user.email}</Text>
            <Text className="address">
              {user.location.city}, {user.location.state}
            </Text>
          </div>
        </div>
      </CardDeck>
    </div>
  );
};
export default CardsList;
