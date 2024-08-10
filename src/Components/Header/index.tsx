import { Container, Title, ArrowLeftIcon } from './styles';

export type HeaderTypeStyleProp = 'GREEN' | 'RED';

type Props = {
    type?: HeaderTypeStyleProp;
    title: number;    
}

export function Header({type, title}: Props) {
    return(
        <Container type={type}>
            <ArrowLeftIcon type={type}/>
            <Title>{title}</Title>
        </Container>
    )
}