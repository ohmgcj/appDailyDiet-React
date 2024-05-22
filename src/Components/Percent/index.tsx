import { Container, PercentNumber, PercentDescription, ArrowUpIcon } from './styles';


export default function Percent() {
    return(
        <Container>
            <PercentNumber>
                50,86%
            </PercentNumber>     
            <PercentDescription>
                das refeições dentro da dieta.
            </PercentDescription>
            <ArrowUpIcon />       
        </Container>
    )
}