import { Container, Total, Info } from './styles';

import { useNavigation } from '@react-navigation/native'

export type CardColorStyle = 'DEFAULT' | 'SUCCESS' | 'FAIL';

type Props = {
    type: CardColorStyle;
    total: number;
    info: string;
};

export function SequenceCard({type, total, info}: Props) {
    const navigation = useNavigation();

    const handleViewMeal = () => {
        navigation.navigate('consultMeal')
    }

    return(
        <Container type={type} onPress={handleViewMeal}>
            <Total>{total}</Total>
            <Info>{info}</Info>
        </Container>
    )
}