import React from 'react';
import LabelPreferences from './LabelPreferences';

const ModalityCardPreferences = ({ labels, edit }) => {
  return (
    <>
      <div className="row justify-content-between align-items-center">
        {labels.map(({ text, icon, link, active }, index) => {
          if (active[0])
            return (
              <LabelPreferences
                link={link}
                text={text}
                icon={icon}
                index={index}
              />
            );
        })}
      </div>
    </>
  );
};

export default ModalityCardPreferences;
