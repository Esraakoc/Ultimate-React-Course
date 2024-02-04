import React, {useState} from "react";
import "../styles/form.css";
function Form({onAddItems}) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()};
    console.log(newItem);
    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  };
  return (
    <form
      className="formDiv"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option
            value={num}
            key={num}
          >
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;
