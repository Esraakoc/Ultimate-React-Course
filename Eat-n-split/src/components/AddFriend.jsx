import React, {useState} from "react";
import "../App.css";
import Button from "./Button";
function AddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return; 

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      img: `${img}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImg("");
  };
  return (
    <form
      className="form-add-friend"
      onSubmit={handleSubmit}
    >
      <label>🧍‍♀️🧍‍♂️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
