import React from "react";
import Friend from "./Friend";
import "../App.css";
function Friends({friends, onSelection, selectedFriend}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default Friends;
