import React from 'react';
import { Image, Text } from 'react-native';
import { Container, LogoContainer, Meals, New, DayList, Date } from './styles';
import { ForkKnife } from 'phosphor-react-native';

import Percent from '@Components/Percent';
import {ButtonIcon} from '@Components/ButtonIcon';
import { Meal } from '@Components/Meal';


export function Home() {
    return (
        <Container>
            <LogoContainer>
                <ForkKnife size={36} weight="bold" style={{ marginRight: 5 }}/>
                <Image source={require('@assets/images/Vector.png')}/>
            </LogoContainer>
            <Percent percentNumber={50}/>
            <Meals>
                <New>
                    <Text>Refeições</Text>
                    <ButtonIcon 
                        icon={'ADD'} 
                        type={'DEFAULT'} 
                        title='Nova Refeição'
                    />
                </New>
                <DayList>
                    <Date>22.05.2024</Date>
                    <Meal type='STATUSGREEN' time='20:00' title='Comida 4'/>
                    <Meal type='STATUSRED' time='18:00' title='Comida 3'/>
                    <Meal type='STATUSGREEN' time='16:00' title='Comida 2'/>
                    <Meal type='STATUSRED' time='12:00' title='Comida 1'/>
                    
                </DayList>
            </Meals>
        </Container>
    );
}