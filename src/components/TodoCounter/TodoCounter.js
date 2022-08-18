import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h2 className="TodoCounter">
        Has completado {completed} de {total} ToDOs
      </h2>
    </div>
  );
}

export { TodoCounter };
