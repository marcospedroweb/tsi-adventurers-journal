import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';

const UnsavedChanges = ({ msg = 'Alterações não salvas' }) => {
  const { alertEditing } = React.useContext(GlobalContext);
  return (
    <p
      className={alertEditing ? '' : 'd-none'}
      style={{ color: '#FF7979', fontSize: '.9rem' }}
    >
      {msg}
    </p>
  );
};

export default UnsavedChanges;
