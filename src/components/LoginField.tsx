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
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: ""
  });

  const idChange = (event: any) => { setLoginInfo({ ...loginInfo, id: event.value }) };
  const pwChange = (event: any) => { setLoginInfo({ ...loginInfo, password: event.value }) };

  const enableLoginBtn = loginInfo.id.length == 0 || loginInfo.password.length == 0

  const [loading, setLoading] = useState(false);

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
      <Button disabled={enableLoginBtn} onClick={() => setLoading(true)}>Login</Button>
    </Container>
  );
}
