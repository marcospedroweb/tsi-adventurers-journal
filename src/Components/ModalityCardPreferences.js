import React from 'react';
import LabelPreferences from './LabelPreferences';

const ModalityCardPreferences = ({ labels, edit, ids, setIds }) => {
  return (
    <>
      <div className="row justify-content-between align-items-center">
        {labels.map((element, index) => {
          if (
            ids.includes(element.identify ? element.identify : element.id)
              ? true
              : false
          )
            return (
              <LabelPreferences
                text={element.nome}
                index={index}
                key={`${element.identify ? element.identify : element.id}${
                  element.nome
                }`}
              />
            );
        })}
      </div>
    </>
  );
};

export default ModalityCardPreferences;
