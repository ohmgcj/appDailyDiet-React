import { Container, PercentNumber, PercentDescription, ArrowUpIcon, ArrowLeftIcon } from './styles';

type Props = {
    percentNumber: number;
    iconPosition?: 'left' | 'right';
    height?: number;
};

export default function Percent({ percentNumber, iconPosition, height  }: Props) {
    const ArrowIcon = iconPosition === 'left' ?  ArrowLeftIcon : ArrowUpIcon;
    
    return(
        <Container height={height}>
            <PercentNumber>
                {percentNumber}%
            </PercentNumber>     
            <PercentDescription>
                das refeições dentro da dieta.
            </PercentDescription>
            <ArrowIcon />       
        </Container>
    )
}