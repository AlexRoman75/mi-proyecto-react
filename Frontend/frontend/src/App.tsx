import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hola/')
      .then(response => response.json())
      .then(data => setMensaje(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  console.log("mensaje", mensaje)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Frontend React</h1>
      <p>Respuesta del backend:</p>
      <strong>{mensaje}</strong>
    </div>
  );
}

export default App;