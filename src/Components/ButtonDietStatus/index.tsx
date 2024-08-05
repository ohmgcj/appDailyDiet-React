import { Container, Title, Status} from './styles';

export type ButtonTypeStyleProps = 'GREEN' | 'RED';

type Props = {
    type: ButtonTypeStyleProps;
    title: string;
    isActive: boolean;
    onPress: () => void;
}

export default function ButtonDietStatus({type, title, isActive, onPress}: Props) {
    return(
        <Container 
        type={type} 
        onPress={onPress}
        isActive={isActive}>
            <Status type={type}/>
            <Title>{title}</Title>
        </Container>
    );
}