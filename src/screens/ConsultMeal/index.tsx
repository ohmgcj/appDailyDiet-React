import { Container, Content, Info, Meal, Title, Description, TimeInfo, Date, TagContainer, Status, EditButtons } from './styles';

import { Header } from '@Components/Header';
import { ButtonIcon } from '@Components/ButtonIcon';

import { useNavigation } from '@react-navigation/native'; 
import { Alert } from 'react-native';

export function ConsultMeal() {

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
                    <Title>Pães</Title>
                    <Description>Teste de texto</Description>
                </Meal>
                <TimeInfo>
                <Date>Date e Hora</Date>
                <Description>12/08/2024 às 16:00</Description>
                </TimeInfo>
                <TagContainer>
                    <Status status='GREEN'/>
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