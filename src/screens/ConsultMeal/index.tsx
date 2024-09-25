import { Container, Content, Info, Meal, Title, Description, TimeInfo, Date, TagContainer, Status, EditButtons } from './styles';

import { Header } from '@Components/Header';
import { ButtonIcon } from '@Components/ButtonIcon';

import { useNavigation, useRoute } from '@react-navigation/native'; 
import { Alert } from 'react-native';

import { MealType } from '@screens/Home';
import React, { useState } from 'react';
import { deleteMeal } from '@storage/meal/deleteMeal';
import { DeleteModal } from '@Components/DeleteModal';

export function ConsultMeal() {
    const route = useRoute();
    const item = route.params as MealType;
    const itemMeal = item.item;

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const navigation = useNavigation();

    function handleEditMeal(meal: MealType) {
        navigation.navigate('registerMeal', { meal });
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
        <>
        <Container>
            <Header title='Refeição' type={itemMeal.mealType}/>
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
                    <Description>{itemMeal.mealType === 'STATUSGREEN' ? 'dentro da dieta' : 'fora da dieta'}</Description>
                </TagContainer>
                </Info>
                <EditButtons>
                    <ButtonIcon icon='EDIT' title='Editar Refeição' type='DEFAULT' onPress={() => handleEditMeal(itemMeal)}/>
                    <ButtonIcon icon='DELETE' title='Excluir Refeição' type='ACTIVE' onPress={() => setIsDeleteModalVisible(true)}/>
                </EditButtons>
            </Content>
        </Container>
        <DeleteModal 
        isVisible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        onDelete={() => handleDelete(itemMeal.id)}/>
        </>
    );
};