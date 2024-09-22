import { Container, PercentNumber, PercentDescription, ArrowIconTouchable, ArrowUpIcon, ArrowLeftIcon } from './styles';

import { useNavigation } from '@react-navigation/native';

type Props = {
    percentNumber: string;
    iconPosition?: 'left' | 'right';
    height?: number;
};

export default function Percent({ percentNumber, iconPosition, height  }: Props) {
    const navigation = useNavigation();

    const handleOpenStats = () => {
        navigation.navigate('stats');
    }

    const handleGoBack = () => {
        navigation.goBack();
    };
    
    return(
        <Container height={height} onTouchStart={handleOpenStats} colorType = {parseInt(percentNumber) > 50 ? 'GREEN' : 'RED'}>
            <PercentNumber>
                {percentNumber}%
            </PercentNumber>     
            <PercentDescription>
                das refeições dentro da dieta.
            </PercentDescription>
            {iconPosition === 'left' ? (
                <ArrowIconTouchable onPress={handleGoBack}>
                    <ArrowLeftIcon />
                </ArrowIconTouchable>
            ) : (
                <ArrowUpIcon />
            )}  
        </Container>
    )
}