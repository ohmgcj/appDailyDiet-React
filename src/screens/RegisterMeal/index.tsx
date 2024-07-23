import { Container, Content, Form, Label, NameInput, DescInput, DateAndTime, LeftWrapper, RightWrapper, DietButtons, DietButtonsOptions } from './styles';

import ButtonDietStatus from '@Components/ButtonDietStatus';
import { Header } from '@Components/Header';

export function RegisterMeal(){
    return(
        <Container>
            <Header title='Registro de prato'/>
            <Content>
                <Form>
                    <Label>Nome</Label>
                    <NameInput/>
                    <Label>Descrição</Label>
                    <DescInput/>
                    <DateAndTime>
                        <LeftWrapper>
                        <Label>Data</Label>
                        <NameInput/>
                        </LeftWrapper>
                        <RightWrapper>
                        <Label>Hora</Label>
                        <NameInput/>
                        </RightWrapper>
                    </DateAndTime>
                    <DietButtons>
                        <Label>Está dentro da dieta?</Label>
                        <DietButtonsOptions>
                        <LeftWrapper>
                            <ButtonDietStatus status='GREEN' type='DEFAULT' title='Sim'/>
                        </LeftWrapper>
                        <RightWrapper>
                        <ButtonDietStatus status='RED' type='DEFAULT' title='Não'/>
                        </RightWrapper>
                        </DietButtonsOptions>
                    </DietButtons>
                </Form>
            </Content>
        </Container>
    )
}