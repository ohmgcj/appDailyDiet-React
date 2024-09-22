import { Container, Content, Title, Data, Info, LeftWrapper, RightWrapper }  from './styles';

import Percent from '@Components/Percent';
import { SequenceCard } from '@Components/SequenceCard';
import { useFocusEffect } from '@react-navigation/native';
import { MealType } from '@screens/Home';
import { getAllMeals } from '@storage/meal/getAllMeals';
import React, { useEffect } from 'react';
import { useState } from 'react';


export function Stats(){
    const [allMeals, setAllMeals] = useState<MealType[]>([]);
    const [totalPercent, setTotalPercent] = useState<string>();
    const [mealsInDiet, setMealsInDiet] = useState<number>();
    const [mealsNotInDiet, setMealsNotInDiet] = useState<number>();
    const [longestStreak, setLongestStreak] = useState<number>();

    function findPercent() {
        let totalgreen = 0;
        let totalred = 0;
        allMeals.map((item) => {
            if (item.mealType === 'STATUSGREEN') {
                totalgreen += 1
                setMealsInDiet(totalgreen)
            } else if (item.mealType === 'STATUSRED') {
                totalred += 1
                setMealsNotInDiet(totalred)
            }
        })
        const mealsTotal = totalgreen + totalred
        const result = ((totalgreen / mealsTotal) * 100).toFixed(2);
        setTotalPercent(result)
    }

    function findLongestStreak() {
        let maxStreak = 0;
        let currentStreak = 0;
    
        for (let i = 0; i < allMeals.length; i++) {
            if (allMeals[i].mealType === 'STATUSGREEN') {
                currentStreak++;  // Incrementa a streak atual
                maxStreak = Math.max(maxStreak, currentStreak); // Atualiza a maior streak
            } else {
                currentStreak = 0; // Reseta a streak se o valor não for igual
            }
            setLongestStreak(maxStreak)
        }
    
        return maxStreak;
    }

    async function fetchMeals() {
        try {
            const data: MealType[] = await getAllMeals();
            setAllMeals([]);
            setAllMeals(data);
        } catch (error) {
            
        }
    }
    
    useFocusEffect(
        React.useCallback(() => {
        fetchMeals();
        }, [])
      );

    useEffect(() => {
        if (allMeals.length > 0) {
            findPercent()
            findLongestStreak();
        }
    }, [allMeals]);
      
    return(
        <Container>
            <Percent percentNumber={totalPercent || '0'} height={200} iconPosition='left'/>
            <Content>
                <Title>
                    Estatísticas gerais
                </Title>
                <Data>
                    <SequenceCard 
                    type='DEFAULT'
                    total={longestStreak || 0}
                    info={'melhor Sequência de pratos dentro da dieta'}
                    />
                    <SequenceCard 
                    type='DEFAULT'
                    total={allMeals.length}
                    info={'refeições registradas'}
                    />
                    <Info>
                        <LeftWrapper>
                        <SequenceCard 
                        type='SUCCESS'
                        total={mealsInDiet || 0}
                        info={'refeições dentro da dieta'}
                        />
                        </LeftWrapper>
                        <RightWrapper>
                        <SequenceCard 
                        type='FAIL'
                        total={mealsNotInDiet || 0}
                        info={'refeições fora da dieta'}
                        />
                        </RightWrapper>
                    </Info>
                </Data>
            </Content>
        </Container>
    )
}