import React from 'react';
import { Image, Text } from 'react-native';
import { Container, LogoContainer, Meals, New } from './styles';
import { ForkKnife } from 'phosphor-react-native';

import Percent from '@Components/Percent';
import Button from '@Components/Button';
import {ButtonIcon} from '@Components/ButtonIcon';


export function Home() {
    return (
        <Container>
            <LogoContainer>
                <ForkKnife size={36} weight="bold" style={{ marginRight: 5 }}/>
                <Image source={require('@assets/images/Vector.png')}/>
            </LogoContainer>
            <Percent/>
            <Meals>
                <New>
                    <Text>Refeições</Text>
                    <ButtonIcon 
                        icon={'ADD'} 
                        type={'DEFAULT'} 
                        title='Nova Refeição'
                    />
                </New>
            </Meals>
        </Container>
    );
}