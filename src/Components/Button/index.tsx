import { Container, Title } from './styles';

type ButtonProps = {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress}:ButtonProps) {
    return(
        <Container type='DEFAULT' onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    );
}