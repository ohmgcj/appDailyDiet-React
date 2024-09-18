import { Container, Time, Divider, Title, Status } from './styles';

import { TouchableOpacityProps } from 'react-native';
import { StatusType } from '@screens/Home';

export type PropsMeal = TouchableOpacityProps & {
    time: string;
    title: string;
    type: StatusType;
    onPress: Function;
}

export function Meal({ type, time, title, onPress }: PropsMeal){
    
    return (
        <Container onPress={onPress}>
            <Time>{time}</Time>
            <Divider/>
            <Title>{title}</Title>
            <Status type={type}/>
        </Container>
    )
}