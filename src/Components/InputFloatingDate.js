import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputFloatingDate = ({ refComponent, name }) => {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <FloatingLabel controlId="datePicker" label="Selecione uma data">
      <Form.Control
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={today}
        ref={refComponent}
        name={name}
      />
    </FloatingLabel>
  );
};

export default InputFloatingDate;
