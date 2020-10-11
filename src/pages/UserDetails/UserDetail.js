import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import CardDetails from '../../components/CardDetails/CardDetails';

const UserDetails = () => {
  const { users } = useContext(UserContext);
  const { userId } = useParams();

  const renderDetail = users
    .filter((user) => user.id.value === userId)
    .map((user, id) => (
        <CardDetails user={user} key={id}/>
    ));

  return (
    <div className='profile-section'>
      {renderDetail}
    </div>
  );
};

export default UserDetails;
