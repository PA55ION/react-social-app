import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import CardDetails from '../../components/CardDetails/CardDetails';
import Header from "../../components/Header/Header";


const UserDetails = () => {
  const { users } = useContext(UserContext);
  const { userId } = useParams();

  const renderDetail = users
    .filter((user) => user.id.value === userId)
    .map((user, id) => (
        <CardDetails user={user} key={id}/>
    ));

  return (
    <div>
    <Header />
    <div className='profile-section'>
      {renderDetail}
    </div>
    </div>
  );
};

export default UserDetails;
