import { Container, Content, Form, Label, Name, DateAndTime } from './styles';

import { Header } from '@Components/Header';

export function RegisterMeal(){
    return(
        <Container>
            <Header title='Teste' type='GREEN'/>
            <Content>
                <Form>
                    <Label>Nome</Label>
                    <Name/>
                    <Label>Descrição</Label>
                    <Name/>
                    <DateAndTime>
                    <Label>Descrição</Label>
                    <Name/>
                    <Label>Descrição</Label>
                    <Name/>
                    </DateAndTime>
                </Form>
            </Content>
        </Container>
    )
}