import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputFloatingDate = ({
  refComponent,
  name,
  startDateValue,
  setStartDateValue,
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    if (name === 'dateInit') setStartDateValue(e.target.value);
  };

  return (
    <FloatingLabel controlId="datePicker" label="Selecione uma data">
      <Form.Control
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={
          name !== 'dateInit'
            ? startDateValue
              ? startDateValue
              : today
            : today
        }
        ref={refComponent}
        name={name}
        required
      />
    </FloatingLabel>
  );
};

export default InputFloatingDate;
