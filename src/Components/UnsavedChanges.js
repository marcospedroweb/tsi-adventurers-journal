import React from 'react';
import { GlobalContext } from '../Context/GlobalStorage';

const UnsavedChanges = () => {
  const { alertEditing } = React.useContext(GlobalContext);
  return (
    <p
      className={alertEditing ? '' : 'd-none'}
      style={{ color: '#FF7979', fontSize: '.9rem' }}
    >
      Alterações não salvas
    </p>
  );
};

export default UnsavedChanges;
