import { Container, Content, Info, Meal, Title, Description, TimeInfo, Date, TagContainer, Status, EditButtons } from './styles';

import { Header } from '@Components/Header';
import { ButtonIcon } from '@Components/ButtonIcon';

import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'; 
import { Alert } from 'react-native';

import { MealType } from '@screens/Home';
import React from 'react';

export function ConsultMeal() {
    const route = useRoute();
    const { mealDate, mealTime, mealDescription, mealTitle, mealType } = route.params as MealType;

    const navigation = useNavigation();

    const handleEditMeal = () => {
        navigation.navigate('registerMeal');
    }

    const handleDelete = () => {
        Alert.alert('Removida', 'Refeição removida com sucesso!');
    }
    return(
        <Container>
            <Header title='Refeição'/>
            <Content>
                <Info>
                <Meal>
                    <Title>{mealTitle}</Title>
                    <Description>{mealDescription}</Description>
                </Meal>
                <TimeInfo>
                <Date>Date e Hora</Date>
                <Description>{mealDate} às {mealTime}</Description>
                </TimeInfo>
                <TagContainer>
                    <Status status={mealType}/>
                    <Description>dentro da dieta</Description>
                </TagContainer>
                </Info>
                <EditButtons>
                    <ButtonIcon icon='EDIT' title='Editar Refeição' type='DEFAULT' onPress={handleEditMeal}/>
                    <ButtonIcon icon='DELETE' title='Excluir Refeição' type='ACTIVE' onPress={handleDelete}/>
                </EditButtons>
            </Content>
        </Container>
    );
};