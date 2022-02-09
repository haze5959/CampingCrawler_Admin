import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from 'ui-neumorphism'
import { useLogin } from '../hooks/useLogin';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export function LoginField() {
  const { loginInfo, enableLoginBtn, idChange, pwChange } = useLogin();

  return (
    <Container>
      <TextField
        label='ID'
        value={loginInfo.id}
        onChange={idChange} />
      <TextField
        label='Password'
        type='password'
        value={loginInfo.password}
        onChange={pwChange} />
      <Button disabled={enableLoginBtn} onClick={() => null}>Login</Button>
    </Container>
  );
}
