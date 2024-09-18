import { Container, Content, Info, Meal, Title, Description, TimeInfo, Date, TagContainer, Status, EditButtons } from './styles';

import { Header } from '@Components/Header';
import { ButtonIcon } from '@Components/ButtonIcon';

import { useNavigation, useRoute } from '@react-navigation/native'; 
import { Alert } from 'react-native';

import { MealType } from '@screens/Home';
import React from 'react';
import { deleteMeal } from '@storage/meal/deleteMeal';

export function ConsultMeal() {
    const route = useRoute();
    const item = route.params as MealType;
    const itemMeal = item.item;

    const navigation = useNavigation();

    const handleEditMeal = () => {
        navigation.navigate('registerMeal');
    }

    async function handleDelete(id: string) {
        try {
        await deleteMeal(id);
        Alert.alert('Removida', 'Refeição removida com sucesso!');
        navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <Container>
            <Header title='Refeição'/>
            <Content>
                <Info>
                <Meal>
                    <Title>{itemMeal.mealTitle}</Title>
                    <Description>{itemMeal.mealDescription}</Description>
                </Meal>
                <TimeInfo>
                <Date>Date e Hora</Date>
                <Description>{itemMeal.mealDate} às {itemMeal.mealTime}</Description>
                </TimeInfo>
                <TagContainer>
                    <Status status={itemMeal.mealType}/>
                    <Description>dentro da dieta</Description>
                </TagContainer>
                </Info>
                <EditButtons>
                    <ButtonIcon icon='EDIT' title='Editar Refeição' type='DEFAULT' onPress={() => handleEditMeal}/>
                    <ButtonIcon icon='DELETE' title='Excluir Refeição' type='ACTIVE' onPress={() => handleDelete(itemMeal.id)}/>
                </EditButtons>
            </Content>
        </Container>
    );
};