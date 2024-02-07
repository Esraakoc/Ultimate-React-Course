import React, {useState} from "react";
import "./App.css";
import Friends from "./components/friends";
import AddFriend from "./components/AddFriend";
import EatSplit from "./components/EatSplit";
import Button from "./components/Button";

function App() {
  const informations = [
    {
      id: 1,
      img: "https://i.pravatar.cc/48?u=118836",
      name: "Clark",
      balance: -7,
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/48?u=933372",
      name: "Sarah",
      balance: 20,
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/48?u=499476",
      name: "Anthony",
      balance: 0,
    },
  ];
  const [initialFriends, setInitialFriends] = useState(informations);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setInitialFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setInitialFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {...friend, balance: friend.balance + value}
          : friend
      )
    );

    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={initialFriends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : " Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <EatSplit
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
