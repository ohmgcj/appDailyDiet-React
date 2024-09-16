import React, { useState, useCallback, useEffect } from 'react';
import { Container, Content, Form, Label, NameInput, DescInput, DateAndTime, LeftWrapper, RightWrapper, DietButtons } from './styles';

import { useNavigation } from '@react-navigation/native';

import ButtonDietStatus from '@Components/ButtonDietStatus';
import Button from '@Components/Button';
import { Header } from '@Components/Header';
import { Alert, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createMeal } from '@storage/meal/createMeal';

export function RegisterMeal(){
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [type, setType] = useState(() => (activeButton === 'Sim' ? 'STATUSGREEN' : 'STATUSRED'))

    const [isDateValid, setIsDateValid] = useState<boolean>(true);
    const [isTimeValid, setIsTimeValid] = useState<boolean>(true);

    const [activeButton, setActiveButton] = useState('');

    const navigation = useNavigation();

    // Segue a baixo muitas linhas de comentários, é minha primeira vez trabalhando com formatação automática de data e hora

    // Função para manipular mudanças no campo de data
    const handleDateChange = (text: string) => {
        const formattedDate = formatDate(text);
        setIsDateValid(validateDate(formattedDate));
        setDate(formattedDate);
    };

    // Função para formatar a data como DD/MM/YYYY
    const formatDate = (text: string): string => {
        const cleaned = text.replace(/\D/g, ''); // Remove tudo que não for número
        
        let formattedText = '';
        
        // Formata a data enquanto digita
        if (cleaned.length > 0) {
        formattedText += cleaned.substring(0, 2); // Dia
        }
        if (cleaned.length >= 3) {
        formattedText += '/' + cleaned.substring(2, 4); // Mês
        }
        if (cleaned.length >= 5) {
        formattedText += '/' + cleaned.substring(4, 8); // Ano
        }

        return formattedText;
    };

    // Função para validar o formato da data como DD/MM/YYYY com limite
    const validateDate = (text: string): boolean => {
        const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return datePattern.test(text);
    };

    // Função para manipular mudanças no campo de hora
    const handleTimeChange = (text: string) => {
        const formattedTime = formatTime(text);
        setIsTimeValid(validateTime(formattedTime));
        setTime(formattedTime);
    };

    // Função para formatar a hora como HH:MM
    const formatTime = (text: string): string => {
        const cleaned = text.replace(/\D/g, ''); // Remove tudo que não for número
        
        let formattedText = '';
        
        // Formata a hora enquanto digita
        if (cleaned.length > 0) {
        formattedText += cleaned.substring(0, 2); // Hora
        }
        if (cleaned.length >= 3) {
        formattedText += ':' + cleaned.substring(2, 4); // Minutos
        }

        return formattedText;
    };

    // Função para validar o formato da hora como HH:MM com limite
    const validateTime = (text: string): boolean => {
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return timePattern.test(text);
    };

    // Função para manipular o envio do formulário
    async function handleSubmit() {
        try {
            if (isDateValid && isTimeValid && name && description && date && time) {
            await createMeal(name, description, date, time, type);
            navigation.navigate('feedback', {type: type} )
            } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
            }

        } catch(error) {
            console.log(error)
        }
    };

    useEffect(() => {
        setType(activeButton === 'Sim' ? 'STATUSGREEN' : 'STATUSRED');
      }, [activeButton]);

    return(
        <Container>
            <Header title='Nova refeição'/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Content>
                <Form>
                    <Label>Nome</Label>
                    <NameInput
                        value={name} 
                        onChangeText={setName}/>
                    <Label>Descrição</Label>
                    <DescInput
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        textAlignVertical='top'/>
                    <DateAndTime>
                        <LeftWrapper>
                        <Label>Data</Label>
                        <NameInput 
                            value={date}
                            onChangeText={handleDateChange}
                            placeholder='DD/MM/AAAA' keyboardType='numeric'/>
                        </LeftWrapper>
                        <RightWrapper>
                        <Label>Hora</Label>
                        <NameInput 
                            value={time}
                            onChangeText={handleTimeChange}
                            placeholder='HH:MM' keyboardType='numeric' 
                            maxLength={5}/>
                        </RightWrapper>
                    </DateAndTime>
                    <DietButtons>
                        <Label>Está dentro da dieta?</Label>
                        <FlatList 
                        data={['Sim', 'Não']}
                        keyExtractor={item => item}
                        horizontal={false}
                        numColumns={2}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: "stretch" }}
                        columnWrapperStyle={{ gap: 8 }}
                        renderItem={({item}) => (
                            <ButtonDietStatus
                            type={item === 'Sim' ? 'GREEN' : 'RED'} 
                            title={item} 
                            onPress={() => setActiveButton(item)}
                            isActive={activeButton == item}/>                          
                        )}
                        />
                    </DietButtons>
                </Form>
                <Button title='Nova Refeição' onPress={handleSubmit}/>
            </Content>
            </TouchableWithoutFeedback>
        </Container>
    )
}