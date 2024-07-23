import { Container, Title, Status} from './styles';

export type ButtonTypeStyleProps = 'DEFAULT' | 'GREEN' | 'RED';
export type ButtonStatus = 'GREEN' | 'RED';

type Props = {
    type: ButtonTypeStyleProps;
    status: ButtonStatus;
    title: string;
}

export default function ButtonDietStatus({type, status, title}: Props) {
    return(
        <Container type={type}>
            <Status status={status}/>
            <Title>{title}</Title>
        </Container>
    );
}