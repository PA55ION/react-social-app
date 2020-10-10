import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext'

const UserDetails = () => {
    const { users } = useContext(UserContext);
    const { userId } = useParams()

    const renderDetail = users.filter(user => user.id.value === userId)
    .map((user, i) => (
        <h1>{user.name.first}</h1>
    ))
    console.log(renderDetail)
    
    return(
        <div>
            <h1>User Detail</h1>
            {renderDetail}
        </div>
    )
}

export default UserDetails;