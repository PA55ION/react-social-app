import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CardList from '../../components/UserCards/CardList'


const Home = () => {
    const { users } = useContext(UserContext);

    const renderUsers = users.map((user, id) => (
        <CardList user={user} key={id} />
    ))

    console.log(users)
    return(
        <main className='container'>
            {renderUsers}
        </main>
    )
}

export default Home;