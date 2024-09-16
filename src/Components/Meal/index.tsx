import { useNavigation } from '@react-navigation/native';
import { Container, Time, Divider, Title, Status } from './styles';

import { TouchableOpacityProps } from 'react-native';

export type Props = TouchableOpacityProps & {
    time: string;
    title: string;
    type: string;
    onPress: Function;
}

export function Meal({ type, time, title, onPress }: Props){
    
    return (
        <Container onPress={onPress}>
            <Time>{time}</Time>
            <Divider/>
            <Title>{title}</Title>
            <Status type={type}/>
        </Container>
    )
}