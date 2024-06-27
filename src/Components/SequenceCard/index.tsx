import { Container, Total, Info } from './styles';

export type CardColorStyle = 'DEFAULT' | 'SUCCESS' | 'FAIL';

type Props = {
    type: CardColorStyle;
    total: number;
    info: string;
};

export function SequenceCard({type, total, info}: Props) {
    return(
        <Container type={type}>
            <Total>{total}</Total>
            <Info>{info}</Info>
        </Container>
    )
}