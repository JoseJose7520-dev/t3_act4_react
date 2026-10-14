import React from 'react';

export default function UserCard({ nombre, rol, semestre, materia, avatar }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      margin: '10px auto',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      color: '#333'
    }}>
      <img 
        src={avatar} 
        alt={nombre} 
        style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
      />
      <h3>{nombre}</h3>
      <p style={{ color: '#666', fontWeight: 'bold' }}>{rol}</p>
      <p style={{ color: '#666' }}>{semestre}</p>
      <p style={{ color: '#666' }}>{materia}</p>
    </div>
  );
}