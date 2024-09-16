import React, { useState } from 'react';
import { Image, Text, FlatList } from 'react-native';
import { useNavigation, useFocusEffect} from '@react-navigation/native'

import { Container, LogoContainer, Meals, ViewNew, DayList, DateView } from './styles';
import { ForkKnife } from 'phosphor-react-native';

import Percent from '@Components/Percent';
import { ButtonIcon } from '@Components/ButtonIcon';
import { Meal } from '@Components/Meal';

import { dateMapper, DateMapperType } from './homeMappers'
import { getAllMeals } from '@storage/meal/getAllMeals';

export type StatusType = 'STATUSGREEN' | 'STATUSRED'

export type MealType = {
    id: string,
    mealTitle: string,
    mealDescription: string,
    mealDate: string,
    mealTime: string,
    mealType: StatusType,
}


export function Home() {
    const [registredMealsMapped, setMealsMapped] = useState<DateMapperType[]>([]);

    const navigation = useNavigation();

    function sortMealPerTime(a: MealType, b: MealType) {
        const [hoursA, minutesA] = a.mealTime.split(':').map(Number);
        const [hoursB, minutesB] = b.mealTime.split(':').map(Number);
    
        if (hoursA !== hoursB) {
          return hoursA - hoursB;
        }
        return minutesA - minutesB;
      }

      function sortMealPerDate(a: DateMapperType, b: DateMapperType) {
        const [dayA, monthA, yearA] = a.date.split('/').map(Number);
        const [dayB, monthB, yearB] = b.date.split('/').map(Number);
    
        // Cria objetos Date para comparação
        const dateA = new Date(yearA, monthA - 1, dayA); // Meses começam em 0
        const dateB = new Date(yearB, monthB - 1, dayB);
    
        return dateA.getTime() - dateB.getTime(); // Retorna a diferença em milissegundos
    }
        

    function handleNewMeal() {
        navigation.navigate('registerMeal');
    }

    async function fetchMeals() {
        try {
            const data: MealType[] = await getAllMeals();
            setMealsMapped([])
            setMealsMapped(dateMapper(data))
        } catch(error) {
            console.log(error)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
          fetchMeals();
        }, [])
      );

      function renderMeal({ item }: { item: MealType }) {
        return(
            <Meal 
                title={item.mealTitle}
                time={item.mealTime}
                type={item.mealType}
                onPress={() => navigation.navigate('consultMeal', {
                    mealDate: item.mealDate, 
                    mealTime: item.mealTime, 
                    mealDescription: item.mealDescription, 
                    mealTitle: item.mealTitle, 
                    mealType: item.mealType
                })}
            />
        )
      }

      function renderDateView({ item }: { item: DateMapperType }) {
        return(
            <DayList>
                <DateView>{item.date}</DateView>
                <FlatList 
                    data={item.mealList.sort(sortMealPerTime).reverse()}
                    renderItem={renderMeal}
                    keyExtractor={(item) => item.id}
                />
            </DayList>
        )
      }

    return (
        <Container>
            <LogoContainer>
                <ForkKnife size={36} weight="bold" style={{ marginRight: 5 }}/>
                <Image source={require('@assets/images/Vector.png')}/>
            </LogoContainer>
            <Percent percentNumber={'50,30'}/>
            <Meals>
                <ViewNew>
                    <Text>Refeições</Text>
                    <ButtonIcon 
                        icon={'ADD'} 
                        type={'DEFAULT'} 
                        title='Nova Refeição'
                        onPress={handleNewMeal}
                    />
                </ViewNew>

                <FlatList
                    data={registredMealsMapped.sort(sortMealPerDate).reverse()}
                    renderItem={renderDateView}
                    keyExtractor={(item) => item.date}
                />
            </Meals>
        </Container>
    );
}