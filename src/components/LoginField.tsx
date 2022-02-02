import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from 'ui-neumorphism'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export function LoginField() {
  const [fields, handleFieldChange] = useState({
    id: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <TextField
        label='ID'
        className='my-3'
        value={fields.id}
        onChange={handleFieldChange} />
      <TextField
        label='Password'
        className='my-3'
        type='password'
        value={fields.password}
        onChange={handleFieldChange} />
      <Button className='ma-8' disabled>Login</Button>
    </Container>
  );
}
