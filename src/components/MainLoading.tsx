import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProgressCircular } from 'ui-neumorphism'
import { LoadingProvider, LoadingContext } from '../providers/LoadingProvider';

const Background = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Center = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MainLoading = () => {
  const isAppear = useContext(LoadingContext);
  return <Background className={isAppear ? 'fade-out' : 'fade-in'}>
    <Center>
      <ProgressCircular indeterminate={true} size={50} />
    </Center>
  </Background>
}