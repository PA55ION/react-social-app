import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardList from "../../components/Cards/CardList";
import "./Home.css";
import { Input } from "../Home/HomeStyle";

const Home = () => {
  const { users, isLoading } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const renderUsers = users
    .filter((user) => user.name.first.toLowerCase().includes(search.toLowerCase())) //filter user by name
    .map((user, id) => <CardList user={user} key={id} />); //map through each profile and display it on card component
  return (
    <div>
      <form>
        <div className="search-bar">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>
      </form>
      {!isLoading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <main className="container">{renderUsers}</main>
      )}
    </div>
  );
};

export default Home;
