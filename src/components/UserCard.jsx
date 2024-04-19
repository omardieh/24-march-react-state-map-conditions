import React from "react";

function UserCard({ username, age, address: { city } }) {
  return (
    <div>
      <p> {username} </p>
      <p> {age} </p>
      <p> {city} </p>
    </div>
  );
}

export default UserCard;
