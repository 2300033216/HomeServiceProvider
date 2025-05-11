import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Show() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8444/api/services/get")
      .then(res => setServices(res.data))
      .catch(err => alert("Error fetching services: " + err.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ marginBottom: '20px' }}>🛠 Available Home Services</h2>
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <table
          border="1"
          style={{
            margin: 'auto',
            width: '70%',
            borderCollapse: 'collapse',
            backgroundColor: '#fefefe',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <thead style={{ backgroundColor: '#007BFF', color: 'white' }}>
            <tr>
              <th style={{ padding: '10px' }}>Service ID</th>
              <th style={{ padding: '10px' }}>Service Name</th>
              <th style={{ padding: '10px' }}>Category</th>
              <th style={{ padding: '10px' }}>Provider</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id}>
                <td style={{ padding: '10px', textAlign: 'center' }}>{s.id}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{s.name}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{s.category}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{s.providerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Show;