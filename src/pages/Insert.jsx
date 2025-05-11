import React, { useState } from 'react';
import axios from 'axios';

function InsertService() {
  const [service, setService] = useState({
    id: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!service.id || !service.name) {
      alert("Please fill both Service ID and Name");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8444/api/services/add", {
        id: parseInt(service.id),
        name: service.name
      });
      alert(response.data);
      setService({ id: '', name: '' }); // Reset form after submission
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <table>
        <tbody>
          <tr>
            <td><label>Service ID:</label></td>
            <td>
              <input
                type="number"
                name="id"
                placeholder="Enter Service ID"
                value={service.id}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><label>Service Name:</label></td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="e.g. Plumbing, Cleaning"
                value={service.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}>
              <button onClick={handleSubmit} style={{
                padding: '8px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}>
                Add Service
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InsertService;
