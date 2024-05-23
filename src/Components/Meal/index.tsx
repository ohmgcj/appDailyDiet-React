import { Container, Time, Divider, Title, Status } from './styles';

export type StatusType = 'STATUSRED' | 'STATUSGREEN';

type Props = {
    type: StatusType;
    time: string;
    title: string;
}

export function Meal({ type, time, title }: Props){
    return (
        <Container>
            <Time>{time}</Time>
            <Divider/>
            <Title>{title}</Title>
            <Status type={type}/>
        </Container>
    )
}