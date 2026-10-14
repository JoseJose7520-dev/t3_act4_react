import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px auto',
      maxWidth: '350px',
      textAlign: 'center'
    }}>
      <h2>Contador Interactivo</h2>
      <p style={{ fontSize: '2rem', margin: '10px 0' }}>{count}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Incrementar (+)
        </button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Decrementar (-)
        </button>
        <button onClick={() => setCount(0)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Reiniciar
        </button>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button 
          onClick={() => setShowInfo(!showInfo)} 
          style={{ padding: '6px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {showInfo ? 'Ocultar info' : 'Mostrar info'}
        </button>
        {showInfo && (
          <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '10px' }}>
            Este contador utiliza el hook <code>useState</code> para actualizar el número en pantalla dinámicamente.
          </p>
        )}
      </div>
    </div>
  );
}