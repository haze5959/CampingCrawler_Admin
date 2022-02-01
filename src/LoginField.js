import React, { useState, useFormFields } from 'react';
import { TextField, Button } from 'ui-neumorphism'

export function LoginField() {
  const [fields, handleFieldChange] = useFormFields({
    id: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className="App-body">
      <TextField label='ID'
        className='my-3'
        value={fields.id}
        onChange={handleFieldChange}>
      </TextField>
      <TextField
        label='Password'
        className='my-3'
        type='password'
        value={fields.password}
        onChange={handleFieldChange}
      ></TextField>
      <Button className='ma-8' disabled>Login</Button>
    </div>
  );
}
