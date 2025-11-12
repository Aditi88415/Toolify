import "./UserSubmitTool.css";
import { useState } from "react";
import axios from "axios";

export default function UserSubmitTool() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    apiUrl: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/tools", form);
      setMessage(res.data.message);
      setForm({
        name: "",
        description: "",
        category: "",
        price: "",
        apiUrl: "",
      });
    } catch (err) {
      setMessage("Error submitting tool");
    }
  };

  return (
    <div className="user-submit-container">
      <h2>Suggest a New Tool</h2>
      <form className="user-submit-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Tool Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="apiUrl"
          placeholder="API URL"
          value={form.apiUrl}
          onChange={handleChange}
        />
        <button type="submit">Submit Tool</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
