import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const params = useParams();
  const { userId } = params;
  return <div>User Details {userId}</div>;
}

export default UserDetails;
