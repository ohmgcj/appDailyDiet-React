import React, { useState } from 'react';
import { Image, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Container, LogoContainer, Meals, New, DayList, Date } from './styles';
import { ForkKnife } from 'phosphor-react-native';

import Percent from '@Components/Percent';
import { ButtonIcon } from '@Components/ButtonIcon';
import { Meal } from '@Components/Meal';
import { ListEmpty } from '@Components/ListEmpty';

export function Home() {
    const [registredMeals, setMeals] = useState([{id: 1, type: 'STATUSGREEN', time: '16:20', title:'TESTE'}, {id: 2, type: 'STATUSRED', time: '16:50', title:'outro'}]);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('registerMeal');
    }

    return (
        <Container>
            <LogoContainer>
                <ForkKnife size={36} weight="bold" style={{ marginRight: 5 }}/>
                <Image source={require('@assets/images/Vector.png')}/>
            </LogoContainer>
            <Percent percentNumber={'50,30'}/>
            <Meals>
                <New>
                    <Text>Refeições</Text>
                    <ButtonIcon 
                        icon={'ADD'} 
                        type={'DEFAULT'} 
                        title='Nova Refeição'
                        onPress={handleNewMeal}
                    />
                </New>
                <DayList>
                    <Date>22.05.2024</Date>
                    <FlatList
                        data={registredMeals} 
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <Meal type={item.type} time={item.time} title={item.title}/>
                        )}
                        contentContainerStyle={registredMeals.length === 0 && { flex: 1 }}
                        ListEmptyComponent={() => (
                            <ListEmpty/>
                        )}
                    />
                </DayList>
            </Meals>
        </Container>
    );
}