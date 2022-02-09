import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ProgressCircular } from 'ui-neumorphism'
import { LoadingProvider, LoadingContext } from '../providers/LoadingProvider';

// animations
const fadeIn = keyframes`
  0% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const Background = styled.div<{ visible: boolean }>`
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  animation: ${(props) => props.visible ? fadeIn : fadeOut} 0.5s forwards;
`;

const Center = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MainLoading = () => {
  const isAppear = useContext(LoadingContext);
  return <Background visible={isAppear}>
    <Center>
      <ProgressCircular indeterminate={true} size={50} />
    </Center>
  </Background>
}