import { Container, TitleContainer, Title, BackButton, ArrowLeftIcon } from './styles';

import { useNavigation } from '@react-navigation/native'

export type HeaderTypeStyleProp = 'GREEN' | 'RED';

type Props = {
    type?: HeaderTypeStyleProp;
    title: string;    
}

export function Header({type, title }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return(
        <Container type={type}>
            <BackButton onPress={handleGoBack}>
                <ArrowLeftIcon type={type}/>
            </BackButton>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
        </Container>
    )
}