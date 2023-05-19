import React from 'react';

const SuccessMsg = ({
  btn = false,
  msg = 'Informações alteradas com sucesso',
}) => {
  if (btn)
    return (
      <p
        className="fw-bold mt-2 px-1 py-2"
        style={{
          background: '#87FAD1',
          color: '#000',
          fontSize: '.9rem',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        {msg}
      </p>
    );
  else
    return (
      <p
        className="fw-bold mt-2"
        style={{ color: '#87FAD1', fontSize: '.9rem' }}
      >
        {msg}
      </p>
    );
};

export default SuccessMsg;
