// src/pages/Dashboard.jsx
import { useState } from "react";

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [newTool, setNewTool] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setNewTool({ ...newTool, [e.target.name]: e.target.value });
  };

  const addTool = (e) => {
    e.preventDefault();
    setTools([...tools, { ...newTool, id: tools.length + 1 }]);
    setNewTool({ name: "", description: "", price: "" });
  };

  return (
    <div className="dashboard">
      <h2>Seller Dashboard</h2>
      <form onSubmit={addTool} className="tool-form">
        <input
          type="text"
          name="name"
          placeholder="Tool Name"
          value={newTool.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTool.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newTool.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Tool</button>
      </form>

      <h3>My Tools</h3>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <strong>{tool.name}</strong> - {tool.description} ({tool.price})
          </li>
        ))}
      </ul>
    </div>
  );
}
