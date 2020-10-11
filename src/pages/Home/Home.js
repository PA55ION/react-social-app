import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardList from "../../components/Cards/CardList";
import Header from "../../components/Header/Header";



const Home = () => {
    const { users, isLoading, isError } = useContext(UserContext);
    const [search, setSearch] = useState("");

    const renderUsers = users
        // const name = 
        .filter((user) => user.name.first.toLowerCase().includes(search))
        .map((user, id) => <CardList user={user} key={id} />);

        console.log(users)
    return (
        <>
            <Header />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => e.preventDefault()}
            />{" "}
            {isError && <div> Something went wrong... </div>}
            {isLoading ? (
                <div> Loading... </div>
            ) : (
                    <main className="container"> {renderUsers} </main>
                )}
        </>
    );
};

export default Home;
