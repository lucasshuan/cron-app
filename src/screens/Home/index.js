import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { Audio } from 'expo-av';
import { ButtonInteractive, Circle, Container, DescriptionHeader, Header, SubContainer, SubContainerButtons, SubContainerCircle, TitleButton, TitleHeader, TitleTime } from './styles';

const Home = () => {
  const { width, height } = Dimensions.get('window');
  const circleSize = Math.min(width, height) * 0.8;

  const [cronAtivo, setCronAtivo] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [alteredInterval, setAlteredInterval] = useState(0);

  const soundRef = useRef(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../../utils/beep.mpeg')
      );
      soundRef.current = sound;
    };
    loadSound();
    return () => {
      // Remove o som, ao sair da tela
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    }
  }, [])

  function Start() {
    setAlteredInterval(
      setInterval(() => {
        Update()
      }, 1000)
    )
    setCronAtivo(true);
  }

  function Pause() {
    if (alteredInterval) {
      clearInterval(alteredInterval);
    }
    setCronAtivo(false);
  }

  function Stop() {
    Pause();
    setSeconds(0);
    setMinutes(0);
  }

  function Update() {
    if (soundRef.current) {
      soundRef.current.replayAsync();
    }

    setSeconds(prev => {
      if (prev + 1 == 60) {
        setMinutes(min => min + 1);
        return 0;
      }
      return prev + 1;
    });
  }

  return (
    <Container>
      <SubContainer>

        <View />

        <Header>
          <TitleHeader>
            CronApp
          </TitleHeader>
          <DescriptionHeader>
            App by Jean
          </DescriptionHeader>
        </Header>

        <Circle circleSize={circleSize}>
          <SubContainerCircle>
            <TitleTime>{minutes < 10 ? "0" + minutes : minutes}</TitleTime>
            <TitleTime>:</TitleTime>
            <TitleTime>{seconds < 10 ? "0" + seconds : seconds}</TitleTime>
          </SubContainerCircle>
        </Circle>

        <SubContainerButtons>
          {
            !cronAtivo
              ?
              <ButtonInteractive onPress={Start}>
                <TitleButton>Start</TitleButton>
              </ButtonInteractive>
              :
              <ButtonInteractive onPress={Pause}>
                <TitleButton>Pause</TitleButton>
              </ButtonInteractive>
          }

          <View style={{ width: 22 }} />

          <ButtonInteractive disabled={minutes == 0 && seconds == 0} onPress={Stop}>
            <TitleButton>Stop</TitleButton>
          </ButtonInteractive>

        </SubContainerButtons>

      </SubContainer>
    </Container>
  )
}

export { Home };