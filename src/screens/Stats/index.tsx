import { Container, Content, Title, Data, Info, LeftWrapper, RightWrapper }  from './styles';

import Percent from '@Components/Percent';
import { SequenceCard } from '@Components/SequenceCard';

export function Stats(){
    return(
        <Container>
            <Percent percentNumber={50} height={200} iconPosition='left'/>
            <Content>
                <Title>
                    Estatísticas gerais
                </Title>
                <Data>
                    <SequenceCard 
                    type='DEFAULT'
                    total={22}
                    info={'melhor Sequência de pratos dentro da dieta'}
                    />
                    <SequenceCard 
                    type='DEFAULT'
                    total={100}
                    info={'refeições registradas'}
                    />
                    <Info>
                        <LeftWrapper>
                        <SequenceCard 
                        type='SUCCESS'
                        total={78}
                        info={'refeições dentro da dieta'}
                        />
                        </LeftWrapper>
                        <RightWrapper>
                        <SequenceCard 
                        type='FAIL'
                        total={12}
                        info={'refeições fora da dieta'}/>
                        </RightWrapper>
                    </Info>
                </Data>
            </Content>
        </Container>
    )
}