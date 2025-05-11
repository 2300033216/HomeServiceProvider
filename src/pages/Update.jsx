import React, { useState } from 'react';
import axios from 'axios';

function UpdateService() {
  const [service, setService] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!service.id || !service.name.trim()) {
      alert("Please provide both Service ID and a new Service Name.");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:8444/api/services/update", 
        service,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An unknown error occurred.";
      alert('Error occurred: ${errorMessage}');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Update Service</h2>
      <input
        type="text"
        name="id"
        placeholder="Service ID"
        value={service.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="New Service Name"
        value={service.name}
        onChange={handleChange}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleUpdate} style={{ marginLeft: '10px' }}>Update</button>
    </div>
  );
}

export default UpdateService;